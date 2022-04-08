interface Props {
    count: number
}

const Notification = ({count}:Props) => (
    <div className="flex items-center justify-center absolute top-9 w-4 h-4 bg-red-600 rounded-full ml-3 z-50">
        <h2 className="text-white ">{count}</h2>
    </div>
)

export default Notification;