import React,{Component} from 'react'

class Success extends Component{

    state={
        count:5,
    }
    componentDidMount=()=>{
        this.count();
    }
    count=()=>{
        setTimeout(() => {
            this.props.closePaymentPage();
            this.props.closeSuccessPage();
        }, 3000);
    }
    render(){
        return(
            <div>
                
                {this.props.success?
                <div style={{color:'green'}}>
                    Payment is Successfull
                </div>
                :<div style={{color:'red'}}>
                    Payment Failed
                </div>}
                Redirecting to Homepage in 3 second
                
            </div>
        )
    }
}
export default Success