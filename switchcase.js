const a=88;
let grade;
switch (true) {
    case a>90:
        grade="a+";
        break;
        case a>=89:
        grade="a";
        break;
        case a>=80:
        grade="b";
        break;
        case a>=60:
            grade="c";
            break;
            case a>=50:
            grade="d";
            break;
            case a>=40:
                grade="e";
                break;
                


    default:
    grade="fail";}
    document.write("grade is"+" "+ grade);
