package _05_Class.Prac3;

public class MusicEx {
    public static void main(String[] args) {
        Mp3Player mp3 = new Mp3Player();
        CdPlayer cd = new CdPlayer();
        System.out.println("==== Mp3Player ====");
        mp3.play("아이유 블루밍");
        mp3.stop("아이유 블루밍");
        System.out.println("==== CdPlayer ====");
        cd.play("아이유 블루밍");
        cd.stop("아이유 블루밍");
    }
}
