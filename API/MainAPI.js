const API = new Map()

class APIClass {
    constructor(KeyArgs) {
        this.KeyArgs = KeyArgs
    }

    get ReturnSet(KeyName, Value) {
        this.KeyName = KeyName
        this.Value = Value
        if (!API) {
            return console.log("Cannot Find API")
        } else if (API) {
            const SAVE = API.set(this.KeyName, this.Value)
            return key, SAVE
        }
    }

    get Event(EventName, Function) {
        this.EventList = {
            CallbackEvent = "Callback",
            StackListEvent = "StackList"
        }
        for (const Events in EventList) {
            if (EventName === Events) {
                Function(Events)
            }
        }
    }

    get AddNewEvent(Name, Value) {
        const EventList = this.EventList

        EventList[Name] = Value
    }
}

module.exports = {
    APIClass: APIClass,
    API: API
}