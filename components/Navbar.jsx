import { Menu } from "antd";

export function Navbar(mode) {
    const items = [
        { label: "Who am I?", key: "item-1" }, // remember to pass the key prop
        { label: "Github", key: "item-2" }, // which is required
        { label: "linkedIn", key: "item-3" }, // which is required
        {
            label: "Projects",
            key: "submenu",
            children: [{ label: "Portfolio", key: "submenu-item-1" }],
        },
        {
            label: "Wiki",
            key: "submenu",
            children: [
                { label: "Python", key: "submenu-item-2" },
                { label: "Powershell", key: "submenu-item-3" },
            ],
        },
    ];
    return (
        <>
            <Menu items={items} mode={mode} />
        </>
    );
}
