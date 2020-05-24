# Degine Pattern (디자인 패턴)

JavaScript에서 주로 사용되는 디자인 패턴에 대한 기본적인 개념을 정리한다.

## 정의

* 디자인 패턴이란  
소프트웨어를 설계할 때 특정 맥락에서 자주 발생하는 고질적인 문제들이 또 발생했을 때, 재사용 할 수 있는 훌륭한 해결책이다.

* **Don't reinvent the whell**  
바퀴를 다시 발명하지 마라.  
이미 개발되어 잘 사용되는 것을 처음부터 만들 필요가 없다는 의미다.  

## 항목 
* Module
* Prototype
* Observer
* Singleton

## Module Pattern (모듈 패턴)
* Module 정의  
    전체 애플리케이션의 일부를 독립된 코드로 분리해 만들어 놓은 것을 의미한다.
    jQuery와 같은 라이브러리들도 모듈이라 할 수 있다.   

* 용도
    * JavaScript에서 구조화된 코드를 지원하기 위해 느슨한 결합을 제공한다.  
    * Module은 JavaScript에서 특정 구성요소를 다른 여러 구성요소들과 독립적으로 유지하는데 사용된다.  

* 장점  
    * Module은 JavaScript의 클래스와 비슷한 개념이며, 클래스의 강점 중 하나인 캡슐화가 가능하다. 즉 상태 및 동작을 다른 클래스에서 엑세스하지 못하도록 보호한다.  

    정리하면, Module은 public or private 접근 권한 설정이 가능하다.

* **주의사항**  
    * 모듈은 private 범위를 허용하는 즉시 실행 함수(IIFE)여야 한다.  
    IIFE : **I**mmediately **I**nvoked **F**unction **E**xpression  

* Example_Source.html

