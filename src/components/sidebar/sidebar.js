import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import {
    FcMoneyTransfer,
    FcAbout,
    FcOk,
    FcCancel,
    FcClock,
    FcPortraitMode,
    FcSettings,
    FcPrevious,
    FcSms
} from 'react-icons/fc'
import { CButton } from "@coreui/react";
import { AiOutlineLogout } from 'react-icons/ai'

function SideB() {
    const { collapseSidebar } = useProSidebar();

    return (
        <>
            <div style={{ display: 'flex', height: '100%' }}>
                <Sidebar backgroundColor="">
                    <Menu>
                        <SubMenu label="Overview" icon={<FcAbout />}>
                            <MenuItem icon={<FcMoneyTransfer />}>Transaction</MenuItem>
                            <MenuItem icon={<FcClock />}>Schedule alert</MenuItem>
                            <MenuItem icon={<FcMoneyTransfer />}>Cashstack</MenuItem>
                        </SubMenu>
                        <SubMenu label="Accounts" icon={<FcPortraitMode />}>
                            <MenuItem icon={<FcCancel />}>Ban account</MenuItem>
                            <MenuItem icon={<FcOk />}>Verify account</MenuItem>
                        </SubMenu>
                        <SubMenu label="Settings" icon={<FcSettings />}>
                            <MenuItem icon={<FcPortraitMode />}>Account settings</MenuItem>
                            <MenuItem icon={<FcSms />}>Notifications</MenuItem>
                            <MenuItem icon={<AiOutlineLogout />}>Logout</MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>
                <main>
                    <CButton onClick={() => collapseSidebar()} variant="outline-dark" style={{ padding: 5 }}>
                        <FcPrevious />
                    </CButton>
                </main>
                <center>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    , when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    , when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </center>
            </div>
        </>
    )
}

export default SideB;
