import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid';
class PaymentPage extends Component{
    state={
        otp:'',
        openDialog:false,
        t1:'',
        t2:1,
        t3:'2021',
        t4:'',
        t5:'',
    }
    askOTP=()=>{
        let t1=this.state.t1,t2=this.state.t2,t3=this.state.t3,t4=this.state.t4,t5=this.state.t5
        if(t1.length===16&&t2>=1&&t2<=12&&t3>='2020'&&t4.length===3)
            this.setState({openDialog:true})
        else alert("Provided Details are not correct")
    }
    closeDialog=()=>{
        this.setState({openDialog:false})
    }
    collectOTP=(event)=>{
        this.setState({otp:event.target.value})
    }
    checkOTP=()=>{
        this.setState({openDialog:false})
        if(this.state.otp==="123456") this.props.showSuccessPage(true)
        else this.props.showSuccessPage(false)        
    }
    t1=(event)=>{this.setState({t1:event.target.value})};
    t2=(event)=>{this.setState({t2:parseInt(event.target.value)})};
    t3=(event)=>{this.setState({t3:event.target.value})};
    t4=(event)=>{this.setState({t4:event.target.value})};
    
    render(){

        return(
            <div>  
            <Button style={{marginTop:50}} variant='contained' color='secondary' onClick={this.props.closePaymentPage}> {"< "}BACK</Button>
            <Grid container spacing={3} style={{width:600,justifyContent:'space-between',marginTop:50}}>
                <Grid>
                    You Are purchasing item:{this.props.data.name} for price $ {this.props.data.price}
                    <img style={{height:250,width:300}} src={this.props.data.image}></img>
                </Grid>
                <Grid item>
                    <TextField onChange={this.t1} style={{width:600}} variant='outlined' type="number" label={'Credit Card Number 16 digit'} 
                        error={this.state.t1.length===0||this.state.t1.length===16?false:true}></TextField>
                </Grid>
                <Grid item>
                    <TextField onChange={this.t2} style={{width:100}} variant='outlined' type="number" label={'Month'}
                    error={this.state.t2>=1&&this.state.t2<=12?false:true}></TextField>
                    <TextField onChange={this.t3}  style={{width:100}} variant='outlined' type="number" label={'Year'}
                    error={this.state.t3>=new Date().getFullYear()?false:true}></TextField>
                </Grid>
                <Grid item>
                    <TextField onChange={this.t4} variant='outlined' type="number" label={'CVV'}
                    error={this.state.t4.length===0||this.state.t4.length===3?false:true}></TextField>    
                </Grid>
            </Grid>
            <Button variant='contained' color='primary' style={{marginTop:50}} onClick={this.askOTP}>PROCEED</Button>
            <Dialog open={this.state.openDialog} onClose={this.closeDialog}>
                <DialogTitle>
                    Enter OTP Sent to registered mobile
                </DialogTitle>
                <DialogContent style={{display:'flex',justifyContent:'space-between'}}>
                    <TextField variant='outlined' type="number" label={'OTP'} onChange={this.collectOTP}
                    error={this.state.otp.length===0||this.state.otp.length===6?false:true}></TextField>
                    <Button variant='contained' color='primary'onClick={this.checkOTP}>PAY</Button>
                </DialogContent>
            </Dialog>
            
            </div>

        )
    }
}
export default PaymentPage