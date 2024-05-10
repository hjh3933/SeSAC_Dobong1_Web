package _03_array;

/*
 * js에서 제공하는 여러 개의 데이터를 담아두는 자료구조: array, object
 * java에서는 객체를 효율적으로 추가, 삭제, 검색할 수 있는 interface & class java.util.~ 에 포함
 * == collection
 * */

/*
 * java의 collection: import필수!
 * - List
 *   - ArrayList
 *   - Vector
 *   - LinkedList
 * - Set
 *   - HashSet
 *   - TreeSet
 * - Map
 *   - HashMap
 *   - HashTable
 *   - TreeMap
 *   - Properties..
 * */

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// ArrayList
// - List collection에서 가장 많이 사용되는 컬렉션
// - 표준 배열보다 조금 느림, 많은 조작이 필요할 경우 유용
// - 표준 배열과 다르게 배열의 크기를 미리 지정하지 않아도 됨
// - 표준배열: 정적할당, ArrayList: 동적할당
public class ArrayListEx {
    public static void main(String[] args) {
        //<reference타입들어가야해!!>
        // List<E> numbers = new ArrayList<>(); E타입 객체만 저장가능
        // List<> numbers = new ArrayList<>(); 모든 타입 객체 저장가능(섞어서 가능?)
        // 1. arrayList 생성하기
        List<Integer> numbers = new ArrayList<>();
        System.out.println(numbers); //[] 바로 볼 수 있음
        System.out.println(Arrays.toString(numbers.toArray())); // 억지로 사용은 가능

        // isEmpty() 사용해보기 > true or false
        System.out.println("isEmpty? " + numbers.isEmpty());

        // 2. 요소 추가: add()
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);
        // numbers.add("ddk"); 타입을 맞춰서 넣으세요
        System.out.println(numbers);
        System.out.println("isEmpty? " + numbers.isEmpty());
        System.out.println("contains 사용 10: " + numbers.contains(10));
        System.out.println("contains 사용 11: " + numbers.contains(11));

        // 3. index로 요소 접근
        // System.out.println(numbers[0]); [index] 접근하면 안돼요
        System.out.println("o번째 index확인 " + numbers.get(0)); // get(index) OK!

        // 4. index로 요소 수정  set
        // numbers[1] = 22;
        numbers.set(1, 77);
        System.out.println("요소 변경 후 " + numbers); //[10, 77, 30, 40, 50]

        // 5. 요소 삽입: add(index, val)
        numbers.add(1, 7);
        System.out.println("요소 삽입 후 " + numbers); //[10, 7, 77, 30, 40, 50] 뒤의 값들은 밀어내짐, 변경이 X

        // 6. arrayList 끼리 연결 addAll
        List<Integer> numbers2 = new ArrayList<>(Arrays.asList(100, 99, 98));
        System.out.println("numbers2: " + numbers2); //[100, 99, 98]
        numbers.addAll(numbers2); // 실제 numbers변경
        System.out.println("numbers: " + numbers); //[10, 7, 77, 30, 40, 50, 100, 99, 98]
        System.out.println("numbers2: " + numbers2); //[100, 99, 98]

        // 7. 요소의 위치 찾기 indexOf(value): 리턴값은 value에 대한 index 번호
        System.out.println(numbers.indexOf(10)); // 0
        System.out.println(numbers.indexOf(100)); // 6
        System.out.println(numbers.indexOf(1008)); // 요소가 없을 때 -1 고정

        // 8. 요소 삭제 .remove(index)
        System.out.println("numbers 길이>> " + numbers.size());
        numbers.remove(2);
        System.out.println("삭제 후 numbers: " + numbers); //[10, 7, 30, 40, 50, 100, 99, 98]
        System.out.println("길이가 줄어듬>> " + numbers.size());

        // 9. 리스트의 크기 확인 size()
        // number.length 사용불가
        System.out.println(numbers.size());

        // 10. 모든 요소 출력: for-each문
        for (int number : numbers) {
            System.out.print(number + " ");
        }
        System.out.println();

        // 11. 모든 요소 삭제 clear()
        numbers.clear();
        System.out.println("after clear: " + numbers); //[]

        // class타입의 ArrayList
        List<Student> students = new ArrayList<Student>();
        Student person = new Student("juhee", 24); // 인스턴스 생성
        students.add(person);

    }
}

class Student {
    private String name;

    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // getter: 인스턴스의 속성값을 가져오기
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    // setter: 인스턴스의 속성값을 설정
    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // toString()메소드
    // overriding
    @Override
    public String toString() {
        return "Student { name: " + name + " age: " + age + " }";
    }
}
