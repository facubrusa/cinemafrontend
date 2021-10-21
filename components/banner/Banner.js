const Banner = ({banner}) => {
    let { src } = banner;
    
    return ( 
        <div className="item-slick1" style={{"backgroundImage":`url("${src}")`}}>
            <div className="container h-full">
                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                    <div className="layer-slick1 animated visible-false">
                        <button className="play-button"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Banner;