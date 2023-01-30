import {configureStore} from "@reduxjs/toolkit"

import { customerReducer } from "./reducer/Customer"
import { depositeReducer } from "./reducer/Deposite"
import { kistiReducer } from "./reducer/Kisti"
import { spendReducer } from "./reducer/SpendReducer"
import { totalEarnReducer } from "./reducer/TotalEarn"
import { userReducer } from "./reducer/User"

const store = configureStore({
    reducer:{
      user:userReducer,
      customer:customerReducer,
      spend:spendReducer,
      kisti:kistiReducer,
      deposite:depositeReducer,
      totalearn:totalEarnReducer
    }
})


export default store