export default function Carrosel({
    src1="/cartazes/car.png",
    src2="/cartazes/stitchh.png",
    src3="/cartazes/dragao.webp",
}) {
    return (
        <>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="4000">
                <img src={src1} class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src={src2} class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
                <img src={src3} class="d-block w-100" alt="..."></img>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
}