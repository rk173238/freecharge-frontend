import React,{Component} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
class Cardd extends Component{
    render(){
        return(
            <div>
                <Card style={{maxWidth:250,minWidth:250,maxHeight:550,minHeight:550,cursor:'pointer'}} onClick={()=>this.props.showPaymentPage(this.props.avatar)}>
                    <CardHeader
                        style={{height:100}}
                        avatar={
                        <Avatar aria-label="recipe" >
                            {this.props.avatar}
                        </Avatar>
                        }
                        title={this.props.title}
                        subheader={this.props.label}
                    />
                    <img style={{height:250,width:300}} src={this.props.image}></img>
                    <CardContent style={{height:80}}>
                        {this.props.text}
                        
                    </CardContent>
                    <CardActions style={{fontWeight:'bold'}}>
                        <AttachMoneyIcon></AttachMoneyIcon>{this.props.price}
                        <span >Category: {this.props.category}</span>
                    </CardActions>
                    </Card>
            </div>
        )
    }
}
export default Cardd


