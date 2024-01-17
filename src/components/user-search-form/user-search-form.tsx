import React from "react";
import {Formik} from "formik";
import {Field} from "formik"
import {Filter} from "../../redux/reducers/users-reducer";
import {DownOutlined, InfoCircleOutlined, UserOutlined} from "@ant-design/icons";
import {Dropdown, Input, Space, Tooltip, Typography} from "antd";

type Props = {
    onFilterChanged: (filter: Filter) => void
}

export const UserSearchForm = React.memo(({onFilterChanged}: Props) => {
    return <div>
        <h3>Поиск</h3>
        <Formik
            initialValues={{term: '', friend: null}}
            onSubmit={(value: Filter, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
                onFilterChanged(value)
                setSubmitting(false)
            }}
        >
            {({isSubmitting}) => (
                <form>
                    <Input
                        placeholder="Enter username"
                        prefix={<UserOutlined className="site-form-item-icon"/>}
                        suffix={
                            <Tooltip title="Serach users">
                                <InfoCircleOutlined style={{color: 'rgba(0,0,0,.45)'}}/>
                            </Tooltip>}
                        type="text" name="term"/>

                    <Field name={'friend'} as={'select'} placeholder={'All user'}>
                        <option value={'null'}>Все пользователи</option>
                        <option value={"true"}>Мои подписки</option>
                    </Field>

                    <button type="submit" disabled={isSubmitting}>
                        Найти
                    </button>
                </form>
            )}
        </Formik>
    </div>
})