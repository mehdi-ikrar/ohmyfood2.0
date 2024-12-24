class makevotant {
            name;
            team;
            color;
            age;
            constructor(name, team, color, age){
                this.name = name;
                this.team = team;
                this.color = color;
                this.age = age;
                
                

            } 
            vote() {
                console.log(`je suis ${this.name}, je vote ${this.team}, car je suis ${this.color},et j'ai ${this.age}`);
            }
             
}

const mamadou = new makevotant ("mamadou","indécis","noir",35);
const roger = new makevotant ("roger","rn","blanc",43);
const karim = new makevotant ("karim","front populaire","rebeux","21");

karim.vote()