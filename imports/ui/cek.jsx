import React from "react";

export const Coba = () => {
    // const navigate = useNavigate();
    const [dataSoal, setdataSoal] = useRecoilState(counterIndex);

    const { soal, soalCount, isLoading } = useTracker(() => {
        const handler = Meteor.subscribe("soal");
        let isLoading = false;

        if (!handler.ready()) {
            return { isLoading: true };
        }

        const soal = TesTeksCollection.find({}).fetch(); //ini tak ganti
        const soalCount = TesTeksCollection.find().count();

        return { soal, soalCount, isLoading };
    });

    React.useEffect(() => {
        if (isLoading != true)
            setdataSoal({...dataSoal, totalSoal: soalCount, data: soal });
    }, [isLoading]);

    // const changeSoal = (data) => {
    //     var a = [];
    //     // Parse the serialized data back into an aray of objects
    //     a = JSON.parse(localStorage.getItem("session")) || [];
    //     // Push the new data (whether it be an object or anything else) onto the array
    //     a.push(data);
    //     console.log(a);
    //     // Re-serialize the array back into a string and store it in localStorage
    //     localStorage.setItem("session", JSON.stringify(a));

    //     setdataSoal({...dataSoal, counter: dataSoal.counter += 1});

    //     console.log(dataSoal.counter);
    // };
    return(
        <div className="container">
            <div className="card">
            <div className="card-header">
                {isLoading ? <Skeleton /> : dataSoal.data[dataSoal.counter]?.title}
            </div>
            <div className="card-body">
                {isLoading ? (
                <Skeleton count={4} />
            ) : dataSoal.data.length != 0 ? (
                dataSoal.data[dataSoal.counter]?.pertanyaan?.map((item, index) => {
                return (
                    <div className="form-check" key={index}>
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            ref={'ref_' + i}
                            onClick={() => changeSoal(item.arti)}
                        />
                    <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                    >
                        {item.title}
                    </label>
                    </div>
                );
                })
            ) : <Skeleton />}
            {dataSoal.counter === dataSoal.totalSoal ? JSON.parse(localStorage.getItem('session'))?.map((item, index) => {return (<p key={index}>{item}</p>)})  : ""}
            </div>
            <div className="card-footer">
            {dataSoal.counter === dataSoal.totalSoal ? (
                <button className="btn btn-primary btn-sm rounded" onClick={() => navigate('/')}>Selesai</button>
            ) : (
                ""
            )}
            </div>
        </div>

        
        <div className='container soal-box'>
            <div className="card">
                <div className="card-header">
                    {isLoading ? <Skeleton /> : dataSoal.data[dataSoal.counter]?.soal}
                </div>
                <div className="card-body">
                {isLoading ? (
                <Skeleton count={4} />
                ) : dataSoal.data.length != 0 ? (
                    dataSoal.data[dataSoal.counter]?.jawaban?.map((item, index) => {
                    return (
                        <div className="form-check" key={index}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                ref={'ref_' + i}
                                onClick={() => changeSoal(item.arti)}
                            />
                        <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                        >
                            {item.teks}
                        </label>
                        </div>
                    );
                    })
                ) : <Skeleton />}
                    {dataSoal.counter === dataSoal.totalSoal ? JSON.parse(localStorage.getItem('session'))?.map((item, index) => {return (<p key={index}>{item}</p>)})  : ""}
                </div>
            </div>
        </div>
        </div>
    )
}