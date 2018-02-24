import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';
import { getData } from './store/actions/action'
// import Hello from './store/hello'

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   list: this.props.storeData.results,
    //   showItems: 10
    // }

    this.state = {

      controlledDate1: null,
      controlledDate2: null,
      btn: true,
      controlledDate1Str: '',
      controlledDate2Str: ''



    }
    const style = {
      marginRight: 20,
    };


  }
  getInfo = () => {
    this.props.getDataVal();
    // console.log(this.state.list)

  }
  handleChange = (event, date) => {
    //let beginDate1 = moment(date).format('YYYY-MM-DD')
    this.setState({
      // controlledDate1:date,
      controlledDate1Str: moment(date).format('YYYY-MM-DD' + ' 00:00:00'),
      controlledDate1: date
    });

  };

  handleChange2 = (event, date) => {
    //let beginDate2 = moment(date).format('YYYY-MM-DD')
    this.setState({
      // controlledDate2:date,
      controlledDate2Str: moment(date).format('YYYY-MM-DD' + ' 00:00:00'),
      controlledDate2: date

    });
    // console.log("Date Format",biginData)
  };
  dataPicker(data) {
       
  }


  dataPicker1(date) {
    
  }
  DatePick = (date_1, date_2) => {

    console.log('DATA PICKER]]', date_1, date_2)

    if (date_1 === '' && date_2 === '') {
      alert("Pick date please ")

    }

    else if (this.state.controlledDate1 > this.state.controlledDate2) {

      alert("you need to start date minmum to end date ")
    }
    else {


      this.props.getDataVal();
      console.log("hit the API")


    }

    this.setState({
      controlledDate1: null,
      controlledDate2: null
    })
  }

  // handleShowData = () => {
  //   this.setState({
  //     showItems:
  //       this.state.showItems >= this.state.list.length ?
  //         this.state.showItems : this.state.showItems + 5
  //   })
  // }

  render() {
    console.log("All Data: ", this.props.storeData.results)
    // const { title ,id} = this.props.storeData
    // let array = Object.keys(this.props.storeData)
    // // console.log(array)
    // let array = [];
    // array.push(this.props.storeData)
    // console.log(array)
    // const items = this.state.list.slice(0,this.state.showItems).map(
    //   (item)=>
    // )

    return (
      <div className="App">
        <MuiThemeProvider>
          <center> <h1>React Game Explorer ...</h1>
            {this.state.controlledDate1Str}<br />
            {this.state.controlledDate2Str}

            <br />
            <br /><br />
            <h2>Release Year (Start Value)</h2>
            <DatePicker
              hintText="Release year (Start Value)"

              value={this.state.controlledDate1}
              onChange={this.handleChange}

              onClick={this.dataPicker(this.state.controlledDate1)}
            />

            <br />
            <br />
            <h2>Release Year (End Value)</h2>
            <DatePicker
              hintText="Release year (End Value)"

              onChange={this.handleChange2}
              value={this.state.controlledDate2}

              onClick={this.dataPicker1(this.state.controlledDate2)}
            />
            <br />

            <FloatingActionButton disabled={false} onClick={this.DatePick.bind(this, this.state.controlledDate1Str, this.state.controlledDate2Str)} >

              {/* <ContentAdd /> */}

            </FloatingActionButton>
            <br />
            <br />




            {
              this.props.storeData.results.map((msg, ind) => {
                return (

                  ((this.state.controlledDate1Str === msg.original_release_date)
                    || (this.state.controlledDate2Str === msg.original_release_date)) ?
                    <span key={ind}>

                      {msg.name}<br />
                      
                      <img src={msg.image.small_url} /><br />
                      {msg.original_release_date}<br />
                      <a href={msg.site_detail_url} >url</a>
                      <br />
                      <br />


                    </span>
                    : null
                );
              })
            }

          </center>
        </MuiThemeProvider>

        {/* <button onClick={this.getInfo.bind(this)}>Information</button> */}

        {/* <button onClick={this.handleShowData}>load More</button> */}

        <div>
        </div>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    storeData: state.reducerData.state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getDataVal: () => {

      dispatch(getData())
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
// {

  //   array.map((data, ind) => {
    //     return (<div key={data.id}>
    //       <h1>{data.title}</h1>
    //       <h1>{ "Body :"+data.body}</h1>
    //       {/* {console.log(data.id)} */}
    //     </div>)
    //   })
    // }
    // this.props.storeData.results.map((data, ind) => {
      //   return (
        //     // console.log(data.image)
        //     <div key={ind}>
        //       <img src={data.image.small_url} />
        //       <span>{data.name}</span>
        //       <button><a href={data.site_detail_url}>url</a></button><br />
        //       <span>{data.original_release_date}</span>
        //     </div>
        //   )
        // })
                                        // {
                                        //   this.state.list.slice(0, this.state.showItems).map(
                                        //     (item, ind) => {
                                        //       return (
                                        //         <div>
                                        //           <img src={item.image.medium_url} alt="image load" />
                                        //         </div>
                                        //       )
                                        //     })
                                        // }