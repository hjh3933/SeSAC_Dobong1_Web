package _05_Class.c_final;

public class FinalUpgrade {
    public static void main(String[] args) {
        FinalMethod obj = new FinalMethod();
        obj.showMessage();
        // 상속은 정상적으로 잘 작동, 재정의는 불가
        SubClass obj2 = new SubClass();
        obj2.showMessage();
    }
}

class FinalMethod {
    final void showMessage() {
        System.out.println("final이 붙은 이 메소드는 오버라이딩할 수 없습니다!!");
    }
}

class SubClass extends FinalMethod {
    // method override
    // @Override 불가능
    // void showMessage() {}
    // 'showMessage()' cannot override 'showMessage()' in '_05_Class.c_final.FinalMethod'; overridden method is final
}

//========== 클래스에 final키워드 사용하기
final class FinalClass {
    // class에 final이 붙은 경우 다른 클랙스에서 상속할 수 없다.
}
// class SubClass2 extends FinalClass {} compile error