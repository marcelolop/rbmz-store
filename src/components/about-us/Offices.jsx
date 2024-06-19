
function Offices() {
  return (
    <section className="mx-auto p-10 bg-blue-800 text-white font-sans pt-20 pb-20 mt-16">
        <div className="my-container w-[100%]">
            <div className="flex flex-col lg:flex-row justify-between w-[100%]">
                <div className="mb-8 lg:mb-0 lg:w-1/3">
                    <p className="text-sm font-light mb-2">Our locations</p>
                    <h1 className="text-4xl font-bold mb-4">Visit our offices</h1>
                      <p className="text-lg font-light">Find us at these locations.</p>

                </div>
                <div className="flex flex-wrap lg:w-2/3 gap-36 justify-end">
                    <div className="flex flex-col gap-5 mr-20">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Melbourne</h2>
                            <p className="text-sm text-slate-100">100 Flinders Street<br />Melbourne VIC 3000 AU</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">London</h2>
                            <p className="text-sm text-slate-100">100 Oxford Street<br />London W1D 1LL UK</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Sydney</h2>
                            <p className="text-sm text-slate-100">100 George Street<br />Sydney NSW 2000 AU</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">San Francisco</h2>
                            <p className="text-sm text-slate-100">100 Market Street<br />San Francisco, CA 94105 USA</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Byron Bay</h2>
                            <p className="text-sm text-slate-100">100 Jonson Street<br />Byron Bay NSW 2481 AU</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Sweden</h2>
                            <p className="text-sm text-slate-100">Drottninggatan 100<br />111 60 Stockholm SE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Offices;
