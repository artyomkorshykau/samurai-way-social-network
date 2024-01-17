import s from './messages.module.css'
import {useSelector} from "react-redux";
import React, {useEffect, useRef, useState} from "react";
import {getChatMessages} from "../../../utils/selectors/chat-selectors/chat-selectors";
import {Message} from "../../../components/message/message";
import { ChatMessage } from '../chat';

export const Messages = () => {

    const messages = useSelector(getChatMessages)

    const messageAnchorRef = useRef<HTMLDivElement>(null)
    const [autoScroll, setAutoScroll] = useState(true)

    const scrollHandler = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        let element = event.currentTarget
        if ((Math.abs(element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !autoScroll && setAutoScroll(true)
        } else {
            autoScroll && setAutoScroll(false)
        }
    }

    useEffect(() => {
        if (autoScroll) {
            messageAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages]);

    return <div className={s.messages} onScroll={scrollHandler}>
        {messages.map((m: ChatMessage) => <Message message={m} key={m.id}/>)}
        <div ref={messageAnchorRef}></div>
    </div>
}