class Dogs{
    constructor(){
        this.id = 4
        this.topic = "Dogs"
        this.message = "Bark!!"
        this.subs = []
    }

    setSubs(list){
        for(let o of list){
            this.subs.push(o)
        }
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
export default Dogs;