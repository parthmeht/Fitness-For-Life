class Item {

    /**
     * Constructor
     * @param itemCode
     * @param itemName
     * @param catalogCategory
     * @param descriptionTitle
     * @param description
     * @param nutritionFactsImage
     * @param rating
     * @param imageURL
     */
    constructor(itemCode, itemName, catalogCategory, descriptionTitle, description, nutritionFactsImage, rating, imageURL) {
        this._itemCode = itemCode;
        this._itemName = itemName;
        this._catalogCategory = catalogCategory;
        this._descriptionTitle = descriptionTitle;
        this._description = description;
        this._nutritionFactsImage = nutritionFactsImage;
        this._rating = rating;
        this._imageURL = imageURL;
    }


    /**
     *
     * Getter and Setters
     */

    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        this._itemName = value;
    }

    get catalogCategory() {
        return this._catalogCategory;
    }

    set catalogCategory(value) {
        this._catalogCategory = value;
    }

    get descriptionTitle() {
        return this._descriptionTitle;
    }

    set descriptionTitle(value) {
        this._descriptionTitle = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get nutritionFactsImage() {
        return this._nutritionFactsImage;
    }

    set nutritionFactsImage(value) {
        this._nutritionFactsImage = value;
    }

    get rating() {
        return this._rating;
    }

    set rating(value) {
        this._rating = value;
    }

    get imageURL() {
        return this._imageURL;
    }

    set imageURL(value) {
        this._imageURL = value;
    }

}
module.exports = Item;