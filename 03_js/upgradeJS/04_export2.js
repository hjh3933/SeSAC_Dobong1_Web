//하나씩 가져오기
export const animals = ['dog', 'cat'];
export function showAnimals() {
    animals.forEach((el)=>console.log(el));
}