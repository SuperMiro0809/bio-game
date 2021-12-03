import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Picture from './Picture';

const PictureList = [
    {
        id: 1,
        url: "one.jpg"
    },
    {
        id: 2,
        url: "two.jpg"
    },
    {
        id: 3,
        url: "three.jpg"
    }
]

function DragDrop() {
    const [board, setBoard] = useState([]);
    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard([pictureList[0]]);
    }

    return (
        <>
            <div className="Picture">
                {PictureList.map((picture) => {
                    return <Picture key={picture.id} picture={picture}/>
                })}
            </div>
            <div className="Board" ref={drop}>
                {board.map((picture) => {
                    return <Picture key={picture.id} picture={picture}/> 
                })}
            </div>
        </>
    );
}

export default DragDrop;