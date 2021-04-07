import React, {Component} from 'react';
import {Table} from "../blocks/Table";
import {TableBlock} from "../blocks/TableBlock";
import {TableBlockItem} from "../blocks/TableBlockItem";
import {usersList} from "../arr";
import {theme} from "../theme/theme";

const userList = usersList

const {colors} = theme

const styles = {
    background: `${colors.headerTableBg}`
}

export default class Main extends Component {
    state = {
        user: [
            {id: "1123", title: 'User Name'},
            {id: "1", title: '1'},
            {id: "2", title: '2'},
            {id: "3", title: '3'},
            {id: "4", title: '4'},
            {id: "6", title: '5'},
            {id: "7", title: '6'},
            {id: "8", title: '7'},
            {id: "9", title: '8'},
            {id: "008", title: '9'},
            {id: "43", title: '10'}
        ]
    }

    getUser = () => {
        return userList.map(user => {
            let arr = []
            arr.push(user.name)
            user.weeks.map(item => {
                let res = 0;
                Object.values(item).flat(2).map(k => {
                    return res += +parseInt(k.timePresent);
                })
                arr.push(res)

            })

            return <TableBlock>
                {arr.map((val, index) => (
                    <TableBlockItem key={index} size={arr.length}>{val}</TableBlockItem>
                ))}
            </TableBlock>
        })
    }

    render() {
        return (
            <Table>
                <TableBlock styles={styles}>
                    {
                        this.state.user.map(item => <TableBlockItem key={item.id}
                                                                    size={this.state.user.length}>{item.title}</TableBlockItem>)
                    }
                </TableBlock>
                {this.getUser()}
            </Table>
        );
    }
}

