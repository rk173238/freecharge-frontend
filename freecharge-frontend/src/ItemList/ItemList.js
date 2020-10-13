import React,{Component} from 'react'
import { fetchData } from '../Services/fetch_data'
import Grid from '@material-ui/core/Grid';
import Cardd from './Cardd';
import Loading from '@material-ui/icons/Autorenew';
import PaymentPage from '../PaymentPage/PaymentPage';
import Success from '../PaymentPage/Success';
class ItemList extends Component{
    state={
        data:'',
        showPaymentPage:false,
    }
    componentDidMount=()=>{
        fetchData.fetchStarLord().then(res=>{
            this.setState({data:res});
        })
    }
    showPaymentPage=(id)=>{
        console.log(this.state.data,id)
        this.setState({showPaymentPage:true,paymentData:this.state.data[id]})
    }
    closePaymentPage=()=>{
        console.log('close')
        this.setState({showPaymentPage:false,paymentData:''})
    }
    showSuccessPage=(val)=>{
        this.setState({showSuccessPage:true,success:val})
    }
    closeSuccessPage=()=>{
        this.setState({showSuccessPage:false})
    }
    render(){
        if(this.state.showSuccessPage){
            return <Success success={this.state.success} 
                            closePaymentPage={this.closePaymentPage} 
                            closeSuccessPage={this.closeSuccessPage}></Success>
        }
        return(
            <div style={{display:'flex',justifyContent:'center'}}>
                {this.state.data?
                !this.state.showPaymentPage?
                <Grid container spacing={3} style={{textAlign:'center'}}>
                    {this.state.data.map(d=>(
                        <Grid item key={d.id}>
                            <Cardd 
                                avatar={d.id} 
                                title={d.name}
                                image={d.image}
                                text={d.description}
                                category={d.category}
                                label={d.label}
                                price={d.price}
                                showPaymentPage={this.showPaymentPage}
                            ></Cardd>
                        </Grid>
                    ))} 
                </Grid>
                :<PaymentPage data={this.state.paymentData} showSuccessPage={this.showSuccessPage} closePaymentPage={this.closePaymentPage}></PaymentPage>
                :<Loading style={{fontSize:100}}></Loading>} 
            </div>
        )
    }
}
export default ItemList