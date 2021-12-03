import { useDrag } from 'react-dnd';

function Picture({picture}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "image", 
        item: {id: picture.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));
    
    return (
        <img 
            ref={drag}
            src={picture.url} 
            alt="Organel" 
            width="300" 
            height="200" 
            style={{border: isDragging ? "5px solid pink" : ""}}
        />
    )
}

export default Picture;