import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Animated } from 'react-native';
import db from '../config'
import firebase from 'firebase';
import { ListItem, Icon } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';

export default class SwipeableFlatList extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {
           allNotifications:this.props.allNotifications 
        }
        console.log(this.state.allNotifications)
    }
    onSwipeValueChange = swipeData =>
    {
        var allNotifications = this.state.allNotifications;
        const { key, value } = swipeData;
        if (value<-Dimensions.get("window").width)
        {
            const newData = [ ...allNotifications ]
            //const prevIndex=allNotifications.findIndex(item=>item.key===key)
            this.updateMarkAsRead( allNotifications[ key ] );
            newData.splice( key, 1 );
            this.setState( {
                allNotifications:newData
            })
        }
    }
    renderItem = (data) =>
    {
        <Animated.View>
        <ListItem
            leftElement={<Icon name="book" type="font-awesome" color="pink" />}
            title={data.item.book_name}
            titleStyle={{ color: "black", fontWeight: "bold" }}
            subtitle={data.item.message}
            bottomDivider
            />   
        </Animated.View>
    }
    renderHiddenItem = () =>
    {
        <View style={styles.rowBack}>
            <View style={[styles.backBrightBtn, styles.backRightBtnRight]}>
                <Text style={styles.backTextWhite}>
                    Mark as Read
                </Text>
            </View>
        </View>
    }
    updateMarkAsRead = (notification) =>
    {
        db.collection( "all_notifications" ).doc( notification.doc_id )
            .update( {
                notification_status:"read"
            })   
    }
    render ()
    {
        return (
            <View style={styles.container}>
                <SwipeListView
                    disableRightSwipe
                    data={this.state.allNotifications}
                    renderItem={this.renderItem}
                    renderHiddenItem={this.renderHiddenItem}
                    rightOpenValue={-Dimensions.get( "window" ).width}
                    previewRowKey={"0"}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    onSwipeValueChange={this.onSwipeValueChange}
                    keyExtractor={(item, index) =>
                    {
                        index.toString();
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  backTextWhite: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    alignSelf: "flex-start"
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#29b6f6",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 100
  },
  backRightBtnRight: {
    backgroundColor: "#29b6f6",
    right: 0
  }
});