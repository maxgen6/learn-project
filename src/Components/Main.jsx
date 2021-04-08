import React, {Component} from 'react';
import {Table} from "../blocks/Table";
import {TableBlock} from "../blocks/TableBlock";
import {TableBlockItem} from "../blocks/TableBlockItem";
import {theme} from "../congif/theme";
import {Modal} from "./Modal";
import {ModalBlock} from "../blocks/ModalBlock";
import {ModalBlockItem} from "../blocks/ModalBlockItem";
import axios from "axios";
import {api} from "../congif/api";



const {colors} = theme
const {url} = api

const styles = {
  "background": `${colors.headerTableBg}`,
  "cursor": "auto"
}

export default class Main extends Component {
  state = {
    user: null,
    activeUser: '',
    x: null,
    y: null,
    showModal: false,
    position: null
  }

  async componentWillMount() {
    const res = await axios.get(`${url}/data`)
    const user = res.data
    this.setState({user})
  }

  /**
   * Callback function, did params for Modal (coordination, showModal and position)
   * @param e {event} - Click event
   * @param data {Object} - Get params about user and week
   */
  modalParams = (e, data) => {
    let x = e.target.getBoundingClientRect().x
    if ((document.documentElement.clientWidth - e.target.getBoundingClientRect().x) < 450) {
      x = x - 390
      this.setState({position: "after"})
    } else {
      this.setState({position: "before"})
    }
    const showModal = this.state.showModal
    this.setState({
      activeUser: data,
      x: x,
      y: e.target.getBoundingClientRect().y,
      showModal: !showModal
    })
  }


  /**
   * Callback function, sorts user and rendering them in component TableBlock
   */
  getUser = () => {
    return this.state.user
      ? this.state.user.map((user, index) => {
        let arr = []
        let data = null
        let modalData = []
        user.map(val => {
          if (val.weeks) {
            data = val.weeks
          }
          if (val.name) {
            arr.push(val.name)
          }
          if (val.weeks) {
            val.weeks.map(week => {
              let res = 0
              Object.values(week).flat(2).map(k => {
                return res += +parseInt(k.timePresent)
              })
              return arr.push(res)
            })
          }
        })
        data.map(d => modalData.push(Object.values(d).flat(2)))
        arr = arr.reverse()
        return <TableBlock key={index + Math.random()}>
          {arr.map((item, index) => (
            <TableBlockItem
              size={arr.length - 1}
              key={item[0] + `${Math.random()}`}
              onClick={e => this.modalParams(e, modalData[index - 1])}
            >{item}</TableBlockItem>
          ))}
        </TableBlock>
      })
      : null
  }

  getDate = () => {
    return this.state.user
      ? this.state.user[0].map(item => {
        let arr = []
        if (item.weeks) {
          item.weeks.map(val => {
            arr.push(val)
          })
          return arr.map(a => (
            <TableBlockItem
              size={arr.length}
              key={Object.keys(a)}
            >{Object.keys(a)}</TableBlockItem>
          ))
        }
      })

      : null
  }


  render() {
    return (
      <Table>
        <TableBlock style={styles}>
          <TableBlockItem>Сотрудник</TableBlockItem>
          {this.getDate()}
        </TableBlock>

        {this.getUser()}
        {this.state.showModal ?
          <Modal
            coordinationX={this.state.x}
            coordinationY={this.state.y}
            position={this.state.position}
          >
            <ModalBlock key={'qw'}>
              <ModalBlockItem key={'ad'}>customer</ModalBlockItem>
              <ModalBlockItem key={'s'}>name project</ModalBlockItem>
              <ModalBlockItem key={'d'}>payment</ModalBlockItem>
              <ModalBlockItem key={'f'}>timePresent</ModalBlockItem>
            </ModalBlock>
            {Object.values(this.state.activeUser).map((item, index, arr) => {
              return (
                <ModalBlock key={index + 'z'}>
                  <ModalBlockItem key={index + 'aa'}>{item.customer}</ModalBlockItem>
                  <ModalBlockItem key={index + 'as'}>{item.name}</ModalBlockItem>
                  <ModalBlockItem key={index + 'aq'}>{item.payment}</ModalBlockItem>
                  <ModalBlockItem key={index + 'az'}>{item.timePresent}</ModalBlockItem>
                </ModalBlock>
              )
            })}
          </Modal>
          : null
        }
      </Table>

    );
  }
}

