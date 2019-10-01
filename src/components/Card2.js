class Card2{
    constructor(){
        this.id = 2
        this.content = ""
        this.subTo = ""
    }
    getId(){
        return this.id
    }
    getContent(){
        return this.content
    }
    setContent(topic){
        this.content = topic
    }
    getSubTo(){
        return this.subTo
    }
    setSubTo(subTo){
        this.subTo = subTo
    }
}
export default Card2