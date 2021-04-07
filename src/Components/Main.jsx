import React, {Component} from 'react';
import {Table} from "../blocks/Table";
import {TableBlock} from "../blocks/TableBlock";
import {TableBlockItem} from "../blocks/TableBlockItem";
import {usersList} from "../arr";
import {theme} from "../theme/theme";
import {Modal} from "./Modal";
import {ModalBlock} from "../blocks/ModalBlock";
import {ModalBlockItem} from "../blocks/ModalBlockItem";

const userList = usersList

const {colors} = theme

const styles = {
    "background": `${colors.headerTableBg}`,
    "cursor": "auto"
}

export default class Main extends Component {
    state = {
        user: [
            {id: "1123", title: 'User Name'},
            {id: "1", title: '01.01.2021'},
            {id: "2", title: '01.01.2021'},
            {id: "3", title: '01.01.2021'},
            {id: "4", title: '01.01.2021'},
            {id: "6", title: '01.01.2021'},
            {id: "7", title: '01.01.2021'},
            {id: "8", title: '01.01.2021'},
            {id: "9", title: '01.01.2021'},
            {id: "008", title: '01.01.2021'},
            {id: "43", title: '01.01.2021'}
        ],
        activeUser: '',
        x: null,
        y: null,
        showModal: false
    }

    modalParams = (e, data) => {
        const showModal = this.state.showModal
        this.setState({
            activeUser: data,
            x: e.target.getBoundingClientRect().x,
            y: e.target.getBoundingClientRect().y,
            showModal: !showModal
        })
    }

    getUser = () => {
        return userList.map((user, index) => {
            let arr = []
            arr.push(user.name)
            user.weeks.map(item => {
                let res = 0;
                Object.values(item).flat(2).map(k => {
                    return res += +parseInt(k.timePresent);
                })
                return arr.push(res)
            })

            return <TableBlock key={index + "a"}>
                {arr.map((val, index) => (
                    <TableBlockItem key={index}
                                    size={arr.length}
                                    data={user}
                                    onClick={e => this.modalParams(e, user.weeks[index - 1])}
                    >{val}</TableBlockItem>
                ))}
            </TableBlock>
        })
    }

    render() {
        return (
            <Table>
                <TableBlock styles={styles}>
                    {
                        this.state.user.map(item =>
                            <TableBlockItem key={item.id}
                            size={this.state.user.length}>{item.title}</TableBlockItem>)
                    }
                </TableBlock>
                {this.getUser()}
                {this.state.showModal ?
                    <Modal coordinationX={this.state.x} coordinationY={this.state.y}>
                        {Object.values(this.state.activeUser).map((item, index, arr) => {
                            return (
                                <>
                                    <ModalBlock >
                                        <ModalBlockItem>customer</ModalBlockItem>
                                        <ModalBlockItem>name project</ModalBlockItem>
                                        <ModalBlockItem>payment</ModalBlockItem>
                                        <ModalBlockItem>timePresent</ModalBlockItem>
                                    </ModalBlock>

                                    {item.map(val => (
                                        <ModalBlock>
                                            <ModalBlockItem>{val.customer}</ModalBlockItem>
                                            <ModalBlockItem>{val.name}</ModalBlockItem>
                                            <ModalBlockItem>{val.payment}</ModalBlockItem>
                                            <ModalBlockItem>{val.timePresent}</ModalBlockItem>
                                        </ModalBlock>
                                    ))}


                                </>
                            )})}
                    </Modal>
                    : null
                }
            </Table>

        );
    }
}

