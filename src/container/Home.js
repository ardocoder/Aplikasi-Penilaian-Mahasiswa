import React, { Component, Fragment } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import logo from '../logo.svg';
import './Home.css';
import axios from "axios";

class Home extends Component {
    options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    state = {
        post: [],
        formPenilaian: {
            aspek_penilaian: 1,
            mahasiswa_1: '',
            mahasiswa_2: '',
            mahasiswa_3: '',
            mahasiswa_4: '',
            mahasiswa_5: '',
            mahasiswa_6: '',
            mahasiswa_7: '',
            mahasiswa_8: '',
            mahasiswa_9: '',
            mahasiswa_10: '',
            userId: 1
        },
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formPenilaian).then((res) => {
            console.log(res);
            this.setState({
                formPenilaian: {
                    aspek_penilaian: 1,
                    mahasiswa_1: '',
                    mahasiswa_2: '',
                    mahasiswa_3: '',
                    mahasiswa_4: '',
                    mahasiswa_5: '',
                    mahasiswa_6: '',
                    mahasiswa_7: '',
                    mahasiswa_8: '',
                    mahasiswa_9: '',
                    mahasiswa_10: '',
                    userId: 1
                },
            })
        }, (err) => {
            console.log('err: ', err)
        })
    }

    handleFormChange = (event) => {
        let formPenilaianNew = {...this.state.formPenilaian}
        let timestamp = new Date().getTime();
        formPenilaianNew['aspek_penilaian'] = timestamp
        formPenilaianNew[event.target.name] = event.target.value
        this.setState({
            formPenilaian: formPenilaianNew
        }, () => {
            console.log('value obj formPenilaian: ', this.state.formPenilaian)
        })
    }

    handleSubmit = () => {
        this.postDataToAPI();
    }

    render() {
        return (
        <Fragment>
            <div className="form-utama">
                <p className="title">Aplikasi Penilaian Mahasiswa</p>
                <br />
                <div className="form-mahasiswa">
                    <img src={logo} alt="logo" className="bio" />
                    <label className="bio">Mahasiswa 1</label>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 1" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_1} />}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 2" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_1}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 3" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_1}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 4" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_1}/>}/>
                </div>
                <div className="form-mahasiswa">
                    <img src={logo} alt="logo" className="bio" />
                    <label className="bio">Mahasiswa 2</label>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 1" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_2} />}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 2" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_2}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 3" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_2}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 4" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_2}/>}/>
                </div>
                <div className="form-mahasiswa">
                    <img src={logo} alt="logo" className="bio" />
                    <label className="bio">Mahasiswa 3</label>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 1" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_3} />}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 2" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_3}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 3" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_3}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 4" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_3}/>}/>
                </div>
                <div className="form-mahasiswa">
                    <img src={logo} alt="logo" className="bio" />
                    <label className="bio">Mahasiswa 4</label>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 1" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_4} />}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 2" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_4}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 3" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_4}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 4" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_4}/>}/>
                </div>
                <div className="form-mahasiswa">
                    <img src={logo} alt="logo" className="bio" />
                    <label className="bio">Mahasiswa 5</label>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 1" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_5} />}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 2" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_5}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 3" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_5}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 4" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_5}/>}/>
                </div>
                <div className="form-mahasiswa">
                    <img src={logo} alt="logo" className="bio" />
                    <label className="bio">Mahasiswa 6</label>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 1" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_6} />}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 2" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_6}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 3" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_6}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 4" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_6}/>}/>
                </div>
                <div className="form-mahasiswa">
                    <img src={logo} alt="logo" className="bio" />
                    <label className="bio">Mahasiswa 7</label>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 1" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_7} />}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 2" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_7}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 3" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_7}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 4" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_7}/>}/>
                </div>
                <div className="form-mahasiswa">
                    <img src={logo} alt="logo" className="bio" />
                    <label className="bio">Mahasiswa 8</label>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 1" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_8} />}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 2" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_8}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 3" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_8}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 4" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_8}/>}/>
                </div>
                <div className="form-mahasiswa">
                    <img src={logo} alt="logo" className="bio" />
                    <label className="bio">Mahasiswa 9</label>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 1" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_9} />}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 2" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_9}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 3" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_9}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 4" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_9}/>}/>
                </div>
                <div className="form-mahasiswa">
                    <img src={logo} alt="logo" className="bio" />
                    <label className="bio">Mahasiswa 10</label>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 1" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_10} />}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 2" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_10}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 3" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_10}/>}/>
                    <Autocomplete className="combo" options={this.options} renderInput={(params) =><TextField {...params} label="Penilaian 4" variant="outlined" onChange={this.handleFormChange} value={this.state.formPenilaian.mahasiswa_10}/>}/>
                </div>
                <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
            </div>
        </Fragment> 
        )
    }
}

export default Home;