class Card1{
    constructor(){
        this.id = 1
        this.content = ""
        this.subTo = ""
    }
    getId(){
        return this.id
    }
    getContent(){
        return this.content
    }
    setContent(message){
        this.content = message
    }
    getSubTo(){
        return this.subTo
    }
    setSubTo(subTo){
        this.subTo = subTo
    }
}
export default Card1