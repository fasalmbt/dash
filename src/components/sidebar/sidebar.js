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
import CardView from "../Card/CardView";

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
                    <CButton onClick={() => collapseSidebar()} variant="ghost" style={{ padding: 5 }}>
                        <FcPrevious />
                    </CButton>
                </main>
                <center>
                    <CardView/>
                </center>
            </div>
        </>
    )
}

export default SideB;
