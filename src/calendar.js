import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Children, cloneElement } from "react";

moment.locale("de");
const localizer = momentLocalizer(moment);

const TouchCellWrapper = ({ children, value, onSelectSlot }) =>
    cloneElement(Children.only(children), {
        onTouchEnd: () => onSelectSlot({ action: "click", slots: [value] }),
        style: {
            className: `${children}`,
        },
    });

export function Cal() {
    const [modal, setModal] = useState(false);
    const [otherModal, setOtherModal] = useState(false);
    const [titolo, setTitolo] = useState("");
    const [bucher, setBucher] = useState("");
    const [oldTitle, setOldTitle] = useState();
    const [oldBucher, setOldBucher] = useState();
    const [start, setStart] = useState();
    const [myEventsList, setMyEventsList] = useState([
        {
            start: moment(
                "Thu Jul 01 2021 00:00:00 GMT+0200 (Central European Summer Time)"
            ).toDate(),
            end: moment(
                "Thu Jul 01 2021 00:00:00 GMT+0200 (Central European Summer Time)"
            ).toDate(),
            title: "Prototype Presentation",
            room: "zimmer 1",
            booker: "Stephan K.",
        },
        {
            start: moment(
                "Fri Jul 02 2021 00:00:00 GMT+0200 (Central European Summer Time)"
            ).toDate(),
            end: moment(
                "Fri Jul 02 2021 00:00:00 GMT+0200 (Central European Summer Time)"
            ).toDate(),
            title: "Meeting",
            room: "zimmer 1",
            booker: "Mona L.",
        },
    ]);

    const handleTitle = (e) => {
        setTitolo(e.target.value);
        console.log(titolo);
    };

    const handleBucher = (e) => {
        setBucher(e.target.value);
    };

    const handleClick = () => {
        let newEvent = {
            start: start,
            end: start,
            title: titolo,
            room: "zimmer 1",
            booker: bucher,
        };

        myEventsList.push(newEvent);
        setModal(false);
    };

    const selecter = (e) => {
        setOldBucher(e.booker);
        setOldTitle(e.title);
        setOtherModal(true);
    };

    const closer = () => {
        window.location.replace("/");
    };

    const closeModal = () => {
        setModal(false);
    };

    const closeOtherModal = () => {
        setOtherModal(false);
    };

    const onSelectSlot = ({ action, slots /*, ...props */ }) => {
        console.log("onSelectSlot");
        if (action === "click") {
            console.log("click");
            setModal(true);
            console.log("slots", slots);
            setStart(slots);
        }
        return false;
    };
    return (
        <div>
            {modal && (
                <div className="modal">
                    <h1 style={{ textAlign: "center", marginBottom: 30 }}>
                        Raum buchen
                    </h1>
                    <div className="inputs">
                        <label htmlFor="">Title</label>
                        <input type="text" onChange={(e) => handleTitle(e)} />
                        <label htmlFor="">Bucher</label>
                        <input type="text" onChange={(e) => handleBucher(e)} />
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-around",
                                marginTop: 40,
                            }}
                        >
                            <button
                                style={{ marginRight: 10 }}
                                onClick={handleClick}
                            >
                                Buchen
                            </button>
                            <button
                                style={{ marginLeft: 10 }}
                                onClick={closeModal}
                            >
                                Abbrechen
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {otherModal && (
                <div
                    className="modal"
                    // style={{
                    //     display: "flex",
                    //     alignItems: "center",
                    //     justifyContent: "center",
                    // }}
                >
                    <p
                        style={{
                            textAlign: "right",
                            marginRight: 20,
                            fontSize: 20,
                            transform: "rotate(45deg)",
                            width: "fit-content",
                            float: "right",
                            cursor: "pointer",
                        }}
                        onClick={closeOtherModal}
                    >
                        +
                    </p>
                    <p className="testo">{`Raum 1 von ${oldBucher} zur ${oldTitle} gebucht`}</p>
                </div>
            )}
            <h1 style={{ textAlign: "center" }}>Raum 1 - Calendar</h1>
            <Calendar
                components={{
                    dateCellWrapper: (props) => (
                        <TouchCellWrapper
                            {...props}
                            onSelectSlot={onSelectSlot}
                        />
                    ),
                }}
                selectable={true}
                events={myEventsList}
                localizer={localizer}
                events={myEventsList}
                views={["month", "week", "day", "agenda"]}
                onSelectEvent={(e) =>
                    // alert(
                    //     `${event.room} von ${event.booker} zur ${event.title} gebucht`
                    // )
                    selecter(e)
                }
                onSelectSlot={(slotInfo) => onSelectSlot(slotInfo)}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
            <button className="close" onClick={closer}>
                Close
            </button>
        </div>
    );
}
