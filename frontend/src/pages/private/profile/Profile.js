import React, {useContext, useRef} from 'react';
import "./style/courses.css"
import {useTranslation} from "react-i18next";
import {userContext} from "../../../settings/user/userContext";
import {ButtonStyled} from "./style/profile"
import * as API from "../../../service/api/serviceAPI";
import {Toast} from "primereact/toast";

const StudentCourses = (props) => {
    const {t} = useTranslation();
    const toast = useRef(null);
    const context = useContext(userContext);

    const sendFile = props => {
        API.putFile(context.user, props.files[0])
            .then(
                (result) => {
                    toast.current.show({
                        severity: 'info',
                        summary: `${t("profile.success")}`,
                        detail: `${t("profile.fileUploaded")}`
                    });
                }
            ).catch((error) => {
            toast.current.show({
                severity: 'info',
                summary: `${t("profile.success")}`,
                detail: `${t("profile.fileUploaded")}`
            });
        });
    };

    return (
        <>
            <Toast ref={toast}/>
            <div className="container">
                <h2>{context.user.role}</h2>
                <div>
                    <h5 className="pr-3">{t("profile.uploadLabel")}</h5>
                    <ButtonStyled mode="basic" name="csv" uploadHandler={sendFile}
                                  customUpload chooseLabel={t("profile.upload")}/>
                </div>
            </div>
        </>
    );
}

export default StudentCourses;
