import React from 'react';
import { List, Icon } from 'seito';
import './schedule.scss';

const Event = (props) => {
  return (
    <div className="event" style={{ backgroundColor: props.color }}>
      <div className="avatar">
        <img className="picture" src={props.avatar} width="100%"/>
      </div>
      <div className="caption">{props.caption}</div>
      <div className="title">{props.title}</div>
      <div className="subtitle">{props.subtitle}</div>
      <div className="rightinfo">
        5<Icon icon="folder" className="small"/>
      </div>
    </div>
  )
}

const DateRenderer = (props) => {
  const handlePrimaryAction = () => { props.onSelection(props); }
  return (
    <li className="scheduleItem" onMouseUp={handlePrimaryAction}>

      <div className="date">
        <span className="day">{props.date1.day}</span>
        {props.date1.month}
      </div>

      <div className="date2">
        <span className="day">{props.date2.day}</span>
        {props.date2.month}
      </div>

      <Event {...props} />
    </li>
  )
}

class Schedule extends React.Component {
  render() {
    const events = this.props.events ? this.props.events : demoEvents;
    return (
      <div className="schedule">
        <List data={events} renderer={DateRenderer} groupBy={this.props.groupBy} groupRenderer={this.props.groupRenderer} onSelection={this.props.onSelection}/>
      </div>
    )
  }
}

export default Schedule;

  const demoEvents = [
      { "id": "11", color: "#FF8888", "title": "BLACK FRIDAY 2016",                  "caption": "0306 / 20129", "info": "hasta 27/11/2016...", groupBy: "2016", date1: { month: "OCT", day: "5"  }, date2: { month: "OCT", day: "8"  }, avatar: "https://randomuser.me/api/portraits/thumb/men/12.jpg" },
      { "id": "12", color: "#88AA88", "title": "BLACK FRIDAY CLUB DEL GOURMET",      "caption": "0166 / 21354", "info": "hasta 27/11/2016...", groupBy: "2016", date1: { month: "NOV", day: "10" }, date2: { month: "NOV", day: "15" }, avatar: "https://randomuser.me/api/portraits/thumb/men/13.jpg" },
      { "id": "13", color: "#8888AA", "title": "BLACK FRIDAY SUPERMERCADO",          "caption": "0212 / 20364", "info": "hasta 27/11/2016...", groupBy: "2016", date1: { month: "DIC", day: "20" }, date2: { month: "DIC", day: "25" }, avatar: "https://randomuser.me/api/portraits/thumb/men/14.jpg" },
      { "id": "14", color: "#6688DD", "title": "MASCOTAS BLACK FRIDAY SUPERMERCADO", "caption": "0166 / 21059", "info": "hasta 27/11/2016...", groupBy: "2017", date1: { month: "JAN", day: "1"  }, date2: { month: "JAN", day: "5"  }, avatar: "https://randomuser.me/api/portraits/thumb/men/15.jpg" },
      { "id": "15", color: "#66AAAA", "title": "MOTOR TOWN BLACK FRIDAY 2016",       "caption": "1168 / 21510", "info": "hasta 27/11/2016...", groupBy: "2017", date1: { month: "FEB", day: "25" }, date2: { month: "MAR", day: "1"  }, avatar: "https://randomuser.me/api/portraits/thumb/men/16.jpg" },
      { "id": "16", color: "#FF8888", "title": "BLACK FRIDAY 2016",                  "caption": "0306 / 20129", "info": "hasta 27/11/2016...", groupBy: "2016", date1: { month: "OCT", day: "5"  }, date2: { month: "OCT", day: "8"  }, avatar: "https://randomuser.me/api/portraits/thumb/men/12.jpg" },
      { "id": "17", color: "#88AA88", "title": "BLACK FRIDAY CLUB DEL GOURMET",      "caption": "0166 / 21354", "info": "hasta 27/11/2016...", groupBy: "2016", date1: { month: "NOV", day: "10" }, date2: { month: "NOV", day: "15" }, avatar: "https://randomuser.me/api/portraits/thumb/men/13.jpg" },
      { "id": "18", color: "#8888AA", "title": "BLACK FRIDAY SUPERMERCADO",          "caption": "0212 / 20364", "info": "hasta 27/11/2016...", groupBy: "2016", date1: { month: "DIC", day: "20" }, date2: { month: "DIC", day: "25" }, avatar: "https://randomuser.me/api/portraits/thumb/men/14.jpg" },
      { "id": "19", color: "#6688DD", "title": "MASCOTAS BLACK FRIDAY SUPERMERCADO", "caption": "0166 / 21059", "info": "hasta 27/11/2016...", groupBy: "2017", date1: { month: "JAN", day: "1"  }, date2: { month: "JAN", day: "5"  }, avatar: "https://randomuser.me/api/portraits/thumb/men/15.jpg" },
      { "id": "20", color: "#66AAAA", "title": "MOTOR TOWN BLACK FRIDAY 2016",       "caption": "1168 / 21510", "info": "hasta 27/11/2016...", groupBy: "2017", date1: { month: "FEB", day: "25" }, date2: { month: "MAR", day: "1"  }, avatar: "https://randomuser.me/api/portraits/thumb/men/16.jpg" },
  ]
