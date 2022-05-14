/**
 * Принимает в себя два аргумента, один из них принимает объект, второй строку с названием
 * дескриптора. Должно вернуть массив строк, которыми являются ключи объекта соответствующие
 * дескриптору. То есть если у нас есть два свойства у которых writable true(если мы передали арг
 * writable) то возвращает массив со строками-названиями этих свойств. Смотрите пример в check.js
 * @param {Object} object
 * @param {'writable' | 'enumerable' | 'configurable'} descriptor
 *
 * @returns string[]
 */

export const getKeysByDescriptor = (object, descriptor) => {
    let arr = []
    let prop = Object.getOwnPropertyDescriptors(object)
    console.log(prop)
   
    for (let key in prop) {

         if (prop[key][descriptor]) {
             arr.push(key)
         }
    }
    return arr
};

/**
 * Должен вернуть true если объект был заморожен каким-либо методом заморозки freeze, seal, preventExtensions иначе false
 * @param {Object} object
 * @returns {boolean}
 */

export const isObjectAnyFrozen = (object) => {
    return Object.isExtensible(object)
};


/**
 * Принимает объект и строку. Мы должны вернуть НОВЫЙ объект(копию оригинального), в котором
 * название свойства (мы передали вторым аргументом), будет поставлено во writable false(только
 * нельзя перезаписывать, все остальное можно). Если свойство было в объекте, то мы ставим его значение
 * если не было ставим в значение null
 * @param {Object} object
 * @param {string} propertyName
 *
 * @returns {Object}
 */

export const assignLockedValues = (object, propertyName) => {
    let prop = Object.getOwnPropertyDescriptors(object)
    let clon;

    if (prop.value !== propertyName || prop.value === undefined) {
            clon = Object.assign({}, object)
            Object.defineProperty(clon, propertyName, {
                value: null,
            })
            return clon
        } else {
        clon = Object.assign({}, object)
        Object.defineProperty(clon, propertyName, {
                writable: false,
            } )
            return clon
        }
   
};

/**
 * Принимает объект и возвращает его копию, только абсолютно замороженную
 * Нельзя удалять свойства, добавлять и редактировать
 * @param {Object} object
 * @returns {Object}
 */
export const freezeAllInObject = (object) => {
    let clon = Object.freeze(Object.assign({}, object))
    return clon
};


