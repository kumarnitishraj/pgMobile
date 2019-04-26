import { 
    login,
    register,
    getPgLists,
    getGuestReletedPg
  } from '../../../network'


class NetworkActions{
    static async login(context, params){
        context.setState({loading:{
            ...context.state.loading,
            submitButtonLoading:true
        }})
        try {
            
            const response = await login(params)
            context.setState({
                loading:{
                    ...context.state.loading,
                    submitButtonLoading:false
                },
                auth:{
                    logedIn:true,
                    user:response
                }
            })

        } catch (error) {
            context.setState({loading:{
                ...context.state.loading,
                submitButtonLoading:false
            }})
            alert('Email and password is not registered !');
        }
        
    }

    static async register(context, params){
        context.setState({loading:{
            ...context.state.loading,
            submitButtonLoading:true
        }})
        try {
            
            const response = await register(params)
            context.setState({
                loading:{
                    ...context.state.loading,
                    submitButtonLoading:false
                },
                auth:{
                    logedIn:true,
                    user:response
                }
            })

        } catch (error) {
            console.log('Error',error)
            context.setState({loading:{
                ...context.state.loading,
                submitButtonLoading:false
            }})
            alert('Email and password is not registered !');
        }
        
    }

    static async getPgLists(context){
        context.setState({loading:{
            ...context.state.loading,
            apiLoading:true
        }})
        try {
            
            const response = await getPgLists(context.state.auth.user)
            console.log('Response : ',response);
            context.setState({
                loading:{
                    ...context.state.loading,
                    apiLoading:false
                },
                pgList:response.data
            })

        } catch (error) {
            console.log('Error',error)
            context.setState({loading:{
                ...context.state.loading,
                apiLoading:false
            }})
            alert('Email and password is not registered !');
        }
        
    }

    static async getGuestReletedPg(context, pgId){
        context.setState({loading:{
            ...context.state.loading,
            apiLoading:true
        }})
        try {
            let params = {
                ...context.state.auth.user,
                pgId,
            }
            const response = await getGuestReletedPg(params)
            console.log('Response : ',response);
            context.setState({
                loading:{
                    ...context.state.loading,
                    apiLoading:false
                },
                guestList:response.data
            })

        } catch (error) {
            console.log('Error',error)
            context.setState({loading:{
                ...context.state.loading,
                apiLoading:false
            }})
            alert('Email and password is not registered !');
        }
        
    }
}

export default NetworkActions;