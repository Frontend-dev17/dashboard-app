import "./Header.scss"

const Header = () => {
    return (
        <div className="header">
            <div className="title">Orders</div>
            <button className="button-style" type="button">
                <i className="icon">+</i>
                <span>Add Order</span>
            </button>
        </div>
    )
}

export default Header