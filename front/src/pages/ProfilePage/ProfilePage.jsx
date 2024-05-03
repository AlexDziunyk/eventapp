import { useEffect, useState } from 'react';
import './style.scss';
import MainEventItem from '../../components/MainEventItem/MainEventItem';
import TicketItem from '../../components/TicketItem/TicketItem';
import NotificationItem from '../../components/NotificationItem/NotificationItem';
import SettingsPage from '../../components/SettingsItem/SettingsItem';
import CompanyItem from '../../components/CompanyItem/CompanyItem';
import axios from '../../axios/axios';

const ProfilePage = () => {
  const [page, setPage] = useState("events");
  const [notifications, setNotifications] = useState([]);

  const getNotifications = async () => {
    const {data} = await axios.get("/notifications/all");

    setNotifications(data.result.reverse())


  }

  useEffect(() => {
    getNotifications();
  }, []);


  return (
    <div className='profile'>
      <h1>My account</h1>
      <div className='profile__bar'>
        <div onClick={() => setPage("events")} className={`profile__bar_item ${page === "events" && "active"}`}>Events</div>
        <div onClick={() => setPage("tickets")} className={`profile__bar_item ${page === "tickets" && "active"}`}>Tickets</div>
        <div onClick={() => setPage("notifications")} className={`profile__bar_item ${page === "notifications" && "active"}`}>Notifications</div>
        <div onClick={() => setPage("settings")} className={`profile__bar_item ${page === "settings" && "active"}`}>Settings</div>
        <div onClick={() => setPage("company")} className={`profile__bar_item ${page === "company" && "active"}`}>Company</div> {/* Додано кнопку для компанії */}
      </div>

      {page === "events" && <div className='profile__events'>
        <MainEventItem />
        <MainEventItem />
        <MainEventItem />
        <MainEventItem />
        <MainEventItem />
      </div>}

      {page === "tickets" && <div className='profile__tickets'>
        <TicketItem />
        <TicketItem />
        <TicketItem />
      </div>}

      {page === "notifications" && <div className='profile__notifications'>
        {notifications.map((item, index) => <NotificationItem key={index} title={item.title} text={item.text} />)}
      </div>}

      {page === "settings" && (
        <div className='profile__settings'>
          <SettingsPage />
        </div>
      )}

      {page === "company" && ( // Додано умову для відображення компанії
        <div className='profile__company'>
          <CompanyItem />
        </div>
      )}

    </div>
  )
}

export default ProfilePage
