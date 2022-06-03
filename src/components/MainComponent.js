import React, { Component } from 'react';
import Header from './HeaderComponent'
import Home from './HomeComponent'
import { fetchSales} from '../redux/actionCreators';
import {Routes, Route,useLocation,useNavigate,Navigate} from 'react-router-dom'
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
      sales: state.sales,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchSales: () => { dispatch(fetchSales())},
})


class Main extends Component {
    componentDidMount() {
        this.props.fetchSales();
    }
    render() {
        return (
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home data={this.props.sales}/>} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        )
    }
}

export function withRouter( Child ) {
    return ( props ) => {
      const location = useLocation();
      const navigate = useNavigate();
      return <Child { ...props } navigate={ navigate } location={ location } />;
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));;