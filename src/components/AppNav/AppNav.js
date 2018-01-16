import React from 'react';
import FontAwesome from 'react-fontawesome';
import Radium from 'radium';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{

    PropTypes = {
        items: PropTypes.array.isRequired
    }

    componentDidMount(){
        const id = window.location.pathname.slice(1);
        this.setState(state => {
            this.props.items.forEach(item => {
                item.id === id ? item.active = 'true' : item.active = 'false'
            });
            return state;
        });
    }

    getActiveTab = (id) => {
      if(id !== ""){
        this.setState(state => {
            this.props.items.forEach(item => {
                item.id === id ? item.active = 'true' : item.active = 'false'
            });
            return state;
        });
      }
    }

    render(){
        const { items } = this.props;
        const { getActiveTab } = this;
        return (
            <div>
                {this.props.vertical === true && 
                    <div style={styles.vertical}>
                        {items.map(item => (
                            <div key={item.id}>
                                {
                                    item.active === 'true' ? 
                                    <Link to={item.id}>
                                        <div 
                                            key={item.id}
                                            id={item.id}
                                            style={styles.verticalActiveItem}
                                            onClick={(e) => getActiveTab(e.target.id)}>
                                            <FontAwesome 
                                                onClick={(e) => getActiveTab(e.target.parentElement.id)}
                                                style={styles.FontAwesome} 
                                                name = {item.icon} 
                                                size={'2x'}/>
                                            {item.label}
                                        </div>
                                    </Link> : 
                                    <Link to={item.id}>
                                        <div 
                                            key={item.id}
                                            id={item.id}
                                            style={styles.item}
                                            onClick={(e) => getActiveTab(e.target.id)}>
                                            <FontAwesome 
                                                onClick={(e) => getActiveTab(e.target.parentElement.id)}
                                                style={styles.FontAwesome} 
                                                name = {item.icon} 
                                                size={'2x'}/>
                                            {item.label}
                                        </div>
                                    </Link>
                                }
                            </div>
                        ))}
                    </div>
                }

                {this.props.vertical !== true && 
                    <div style={styles.horizontal}>
                        {items.map(item => (
                            <div key={item.id}>
                                {
                                    item.active === 'true' ? 
                                    <Link to={item.id}>
                                        <div 
                                            key={item.id}
                                            id={item.id}
                                            style={styles.horizontalActiveItem}
                                            onClick={(e) => getActiveTab(e.target.id)}>
                                            <FontAwesome 
                                                onClick={(e) => getActiveTab(e.target.parentElement.id)}
                                                style={styles.FontAwesome} 
                                                name = {item.icon} 
                                                size={'2x'}/>
                                            {item.label}
                                        </div>
                                    </Link> : 
                                    <Link to={item.id}>
                                        <div 
                                            key={item.id}
                                            id={item.id}
                                            style={styles.item}
                                            onClick={(e) => getActiveTab(e.target.id)}>
                                            <FontAwesome 
                                                onClick={(e) => getActiveTab(e.target.parentElement.id)}
                                                style={styles.FontAwesome} 
                                                name = {item.icon} 
                                                size={'2x'}/>
                                            {item.label}
                                        </div>
                                    </Link>
                                }
                            </div>
                        ))}
                    </div>
                }
            </div>
        )
    }
}

const styles = {
    horizontal: {
        top: 0,
        left: 0,
        overflow: 'hidden',
        lineHeight: '1.33333',
        backgroundColor: '#0c1419',
        color: '#2c404c',
        fontFamily: 'GE Inspira Sans,sans-serif',
        boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.2)',
        display: 'flex'
    },
    vertical: {
        top: 0,
        left: 0,
        width: '53px',
        overflow: 'hidden',
        lineHeight: '1.33333',
        backgroundColor: '#0c1419',
        color: '#2c404c',
        fontFamily: 'GE Inspira Sans,sans-serif',
        boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.2)',
        transition: 'width 0.2s',
        ':hover': {
            width: '325px'
        }
    },
    item: {
        paddingLeft: '0.7em',
        paddingRight: '0.7em',
        paddingBottom: '0.7em',
        paddingTop: '13px',
        whiteSpace: 'nowrap',
        ':hover': {
            cursor: 'pointer',
            backgroundColor: '#1c2a34',
        }
    },
    verticalActiveItem: {
        padding: '0.7em',
        whiteSpace: 'nowrap',
        backgroundColor: '#1c2a34',
        borderLeft: '3px solid #09819c',
        ':hover': {
          cursor: 'pointer',
        }
    },
    horizontalActiveItem: {
        paddingLeft: '0.7em',
        paddingRight: '0.7em',
        paddingBottom: '0.7em',
        paddingTop: '10px',
        whiteSpace: 'nowrap',
        backgroundColor: '#1c2a34',
        borderTop: '3px solid #09819c',
        ':hover': {
          cursor: 'pointer',
        }
    },
    FontAwesome: {
        marginRight: '15px'
    }
}

export default Radium(NavBar);