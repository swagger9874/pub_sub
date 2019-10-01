class Cats{
    constructor(){
        this.id = 3
        this.topic = "Cats"
        this.message = "Meow :3"
        this.subs = []
    }

    setSubs(subTo){
        this.subs.push(subTo)
    }
    getSubs(){
        return this.subs;
    }
    getMessage(){
        return this.message;
    }
    getTopic(){
        return this.topic;
    }

}
export default Cats;