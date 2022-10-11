import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'


const initialState={
   msg:'',
   user:'',
   token:'',
   loading:false,
   error:''
}

export const signUpUser=createAsyncThunk('signupuser',async(body)=>{
    const response=await fetch('url',{
        method:"post",
        headers:{
            'Content-Type':"application/json",
        },
        body:JSON.stringify(body)
    })

    return await response.json()
})

export const signInUser=createAsyncThunk('signinuser',async(body)=>{
    const response=await fetch('url',{
        method:"post",
        headers:{
            'Content-Type':"application/json",
        },
        body:JSON.stringify(body)
    })

    return await response.json()
})

const authSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        addToken:(state,action)=>{
            state.token=localStorage.getItem("token")
        },
        addUser:(state,action)=>{
            state.user=localStorage.getItem("user")
        },
        logout:(state,action)=>{
            state.token=null
            localStorage.clear()
        }

    },
    extraReducers: builder => {
        //login
        builder.addCase(signInUser.pending, state => {
            state.loading = true
          })
          builder.addCase(signInUser.fulfilled, (state, {payload:{error,msg,token,user}}) => {
            state.loading = false
            if(error){
              state.error=error
            }else{
              state.msg=msg;
              state.token=token;
              state.user=user;
              localStorage.setItem('message',msg)
              localStorage.setItem('user',JSON.stringify(user))
              localStorage.setItem('token',token)
            }
  
          })
          builder.addCase(signInUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
            
          })


        // register
        builder.addCase(signUpUser.pending, state => {
          state.loading = true
        })
        builder.addCase(signUpUser.fulfilled, (state, {payload:{error,msg}}) => {
          state.loading = false
          if(error){
            state.error=error
          }else{
            state.msg=msg
          }

        })
        builder.addCase(signUpUser.rejected, (state, action) => {
          state.loading = true
          
          
        })
      }
})

export const {addUser,addToken,logout}=authSlice.actions
export default authSlice.reducer
