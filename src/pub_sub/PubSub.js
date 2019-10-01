class PubSub{
    constructor(animals,cards){
        this.animals = animals
        this.cards = cards
    }
    publish(message,topic){
        const list = []
        this.cards.map(card => {
            if(card.subTo === topic){
                card.content = message
            }
            list.push(card)
        })
        return(list)
    }
    
    subscribe(subTo,id){
        const objects = []
        this.animals.map(animal => {
            if(animal.topic === subTo){
                animal.subs.push(id)
            }
        })
        objects.push(this.animals)
        this.cards.map(card =>{
            if(card.id === id){
                card.subTo = subTo
            }
        })
        objects.push(this.cards)
        return objects
    }

    unSubscribe(){


    }

}
export default PubSub