var UserItem = require('UserItem');

class UserProfile {

    /**
     * Constructor
     * @param userId
     * @param userItemList
     */
    constructor(userId) {
        this._userId = userId;
        this._userItemList = [];
    }
    
    
    /**
     *
     * Getter and Setters
     */
    
    
    get userId() {
        return this._userId;
    }

    set userId(value){
        this._userId = value;
    }

    get userItemList(){
        return this._userItemList;
    }

    set userItemList(value){
        this._userItemList = value;
    }

    addItem(userItem){
        if(userItem instanceof UserItem){
            this._userItemList.push(userItem);
        }else{
            console.log('Invalid Object --> It should be of type UserItem')
        }
    }

    removeItem(userItem){
        if(userItem instanceof UserItem){
            this._userItemList.filter(function(item){
                return item!=userItem;
            });
        }else{
            console.log('Invalid Object --> It should be of type UserItem')
        }
    }

    updateItem(userItem){
        if(userItem instanceof UserItem){
            const index = this._userItemList.findIndex((e) => e.item.itemCode === userItem.item.itemCode);
            if (index === -1) {
                console.log('User Item not present in the list');
            } else {
                this._userItemList[index] = userItem;
            }
        }else{
            console.log('Invalid Object --> It should be of type UserItem')
        }
    }

    getItems(){
        return this._userItemList;
    }

    emptyProfile(){
        this.userItemList = [];
    }
        
}
module.exports = UserProfile;