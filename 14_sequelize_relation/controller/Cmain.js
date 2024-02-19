// GET /
exports.Main = (req, res) => {
  res.render("index");
};

const { Op } = require("sequelize");
const models = require("../models");
// const {} = require("../models");

// GET /players
exports.getAllPlayer = async (req, res) => {
  try {
    const players = await models.Player.findAll();
    console.log(players);
    res.send(players);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

// GET /players/:playerId
//선수 한명조회 {player, profile}
exports.getPlayer = async (req, res) => {
  try {
    console.log(req.params); //{playerId:1}
    const { playerId } = req.params;
    const player = await models.Player.findOne({
      where: {
        player_id: playerId,
      },
      include: [{ model: models.Profile, attributes: ["position", "salary"] }],
      //include 두테이블을 합쳐서 보여준다(innerjoin) },
    });

    res.json(player);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.postPlayer = async (req, res) => {
  try {
    const { name, age, teamId } = req.body;
    const newPlayer = await models.Player.create({
      //보내려는 변수가 name이고 DB컬럼명도 name
      //name만 써도 ok
      name,
      age,
      teamid: teamId,
    });
    console.log(newPlayer);
    res.json(newPlayer);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

// {teamId} req.body, 어떤 팀으로 변경할 건지
// {playerId} req.params 어떤 선수를
exports.patchPlayer = async (req, res) => {
  try {
    const { playerId } = req.params;
    const { teamid } = req.body;

    const updatedPlayer = await models.Player.update(
      {
        teamid,
      },
      {
        where: { player_id: playerId },
      }
    );
    console.log(updatedPlayer);
    res.json(updatedPlayer);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const { playerId } = req.params;

    const isDeleted = await models.Player.destroy({
      where: {
        player_id: playerId,
      },
    });
    console.log(isDeleted); //1(true) or 0(false)
    if (isDeleted) {
      res.send("삭제 성공");
    } else {
      res.send("삭제 실패");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.getTeams = async (req, res) => {
  try {
    console.log(req.query);
    const { sort, search } = req.query;
    let teams;

    //sort = name_asc >> 전체 조회 및 이름순으로 팀 정렬
    //search = [팀이름] >> 특정 팀 이름만 조회
    if (sort === "name_asc") {
      //이름 오름차순 정렬
      teams = await models.Team.findAll({
        attributes: ["team_id", "name"],
        order: [["name", "ASC"]], //order by name asc
      });
    } else if (search) {
      teams = await models.Team.findAll({
        attributes: ["team_id", "name"],
        where: {
          //where name like '%KT%'
          name: { [Op.like]: `%${search}%` },
        },
      });
    } else {
      //sort나 search전달되지 않았을 때
      //sort에 name_asc외의 문자열이 전달
      teams = await models.Team.findAll({
        attributes: ["team_id", "name"],
      });
    }
    //teams=[] or [{},{}]
    if (teams.length === 0) res.send("다시 검색하세요");
    else res.send(teams);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.getTeam = async (req, res) => {
  try {
    const { teamId } = req.params;
    const team = await models.Team.findOne({
      where: { team_id: teamId },
    });
    res.send(team);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};
// GET /teams/:teamId/players
exports.getTeamPlayers = async (req, res) => {
  try {
    //1. 팀정보는 안봐도 되고,
    //특정 팀의 선수정보만 확인하기 위해서는 Player 모델에서
    //teamid기준으로 조회
    const { teamId } = req.params;
    // const teamPlayers = await models.Player.findAll({
    //   where: { teamid: teamId },
    // });
    //항상 컬럼 이름 틀리지 않도록 주의하자!!!

    //2. 팀정보와 소속 선수 정보 조회, join(include)
    const teamPlayers = await models.Team.findOne({
      where: { team_id: teamId },
      include: [{ model: models.Player }],
    });
    res.send(teamPlayers);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};
