import React from "react";
import { connect } from "react-redux";
import agent from "../../agent";
import {
  APPLY_TAG_FILTER, HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED
} from "../../constants/actionTypes";
import Banner from "./Banner";
import MainView from "./MainView";
import Tags from "./Tags";

const Promise = global.Promise;

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
});

class Home extends React.Component {
  state = {
    filteredItems: null
  }


  componentWillMount() {
    const tab = "all";
    const itemsPromise = agent.Items.all;

    this.props.onLoad(
      tab,
      itemsPromise,
      Promise.all([agent.Tags.getAll(), itemsPromise()])
    );
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  search = async (title) => {
    const res = await fetch(`http://localhost:3000/api/items?title=${title}`)
    const json = await res.json()
    
    this.setState({
      filteredItems: json
    })
  }

  render() {
    return (
      <div className="home-page">
        <Banner search={this.search}/>

        <div className="container page">
          <Tags tags={this.props.tags} onClickTag={this.props.onClickTag} />
          <MainView filteredItems={this.state.filteredItems}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
