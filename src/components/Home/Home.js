import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ScrollButton from '../scrollToTop';
import Chatbotbtn from '../../chatbot/Chatbotbtn';
import './home.css';

const Home = () => {
  const [scrollState, setScrollState] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      var scroll = window.pageYOffset;
      if (scroll <= 100) {
        setScrollState(false);
      } else {
        setScrollState(true);
      }
    });
  });
  const [isclick, setIsClick] = useState(false);
  // console.log(isclick);

  return (
    <div style={{ width: '100%' }}>
      <Navbar />
      <section class='main-banner-wrap1 main-banner-wrap6 motion-effects-wrap adj-height'>
        <div class='shape-element'>
          <ul>
            <li>
              <img
                class='wow fadeInLeft colour'
                data-wow-delay='.3s'
                src='img/figure/shape33.svg'
                height='296'
                width='408'
                alt='shape'
              />
            </li>
            <li>
              <img
                class='colour'
                src='img/figure/shape34.svg'
                height='426'
                width='319'
                alt='shape'
              />
            </li>
            <li>
              <img
                class='motion-effects12 colour'
                src='img/figure/shape35.svg'
                width='150'
                height='150'
                alt='shape'
              />
            </li>
            <li>
              <img
                class='colour'
                src='img/figure/shape36.svg'
                width='70'
                height='27'
                alt='shape'
              />
            </li>
            <li>
              <img
                class='motion-effects13 colour'
                src='img/figure/shape37.svg'
                width='191'
                height='178'
                alt='shape'
              />
            </li>
            <li>
              <img
                class='colour'
                src='img/figure/shape38.svg'
                width='719'
                height='196'
                alt='shape'
              />
            </li>
          </ul>
          <div class='item-banner-thumb wow fadeInRight' data-wow-delay='.4s'>
            <img
              src='img/banner/banner6.png'
              width='1204'
              height='1156'
              alt='banner'
            />
          </div>
        </div>
        <div class='container'>
          <div class='row'>
            <div class='col-xl-8'>
              <div class='main-banner-box1 main-banner-box6'>
                <h1 class='item-title wow fadeInUp' data-wow-delay='.4s'>
                  A journey becomes a pilgrimage as we discover, day by day
                </h1>
                <div class='bg-title-wrap' style={{ display: 'block' }}>
                  <span class='background-title solid'>Pilgrimages</span>
                </div>

                <div class='banner-search-wrap'>
                  <div class='rld-main-search'>
                    <div class='row'>
                      <div class='col-sm-12'>
                        <div class='box'>
                          <div class='box-top'>
                            <div class='rld-single-input item'>
                              <input
                                style={{
                                  width: 'fit-content',
                                  padding: '0 20px',
                                }}
                                type='text'
                                placeholder='Enter Keyword here...'
                              />
                            </div>
                            <div class='rld-single-select ml-22'>
                              <select
                                class='select single-select'
                                style={{
                                  width: 'fit-content',
                                  padding: '0 20px',
                                }}
                              >
                                <option value='State'>State</option>
                                <option value='Andaman and Nicobar Islands'>
                                  Andaman and Nicobar Islands
                                </option>
                                <option value='Andhra Pradesh'>
                                  Andhra Pradesh
                                </option>
                                <option value='Arunachal Pradesh'>
                                  Arunachal Pradesh
                                </option>
                                <option value='Assam'>Assam</option>
                                <option value='Bihar'>Bihar</option>
                                <option value='Chandigarh'>Chandigarh</option>
                                <option value='Chhattisgarh'>
                                  Chhattisgarh
                                </option>
                                <option value='Dadra and Nagar Haveli'>
                                  Dadra and Nagar Haveli
                                </option>
                                <option value='Daman and Diu'>
                                  Daman and Diu
                                </option>
                                <option value='Delhi'>Delhi</option>
                                <option value='Goa'>Goa</option>
                                <option value='Gujarat'>Gujarat</option>
                                <option value='Haryana'>Haryana</option>
                                <option value='Himachal Pradesh'>
                                  Himachal Pradesh
                                </option>
                                <option value='Jammu and Kashmir'>
                                  Jammu and Kashmir
                                </option>
                                <option value='Jharkhand'>Jharkhand</option>
                                <option value='Karnataka'>Karnataka</option>
                                <option value='Kerala'>Kerala</option>
                                <option value='Lakshadweep'>Lakshadweep</option>
                                <option value='Madhya Pradesh'>
                                  Madhya Pradesh
                                </option>
                                <option value='Maharashtra'>Maharashtra</option>
                                <option value='Manipur'>Manipur</option>
                                <option value='Meghalaya'>Meghalaya</option>
                                <option value='Mizoram'>Mizoram</option>
                                <option value='Nagaland'>Nagaland</option>
                                <option value='Odisha'>Odisha</option>
                                <option value='Puducherry'>Puducherry</option>
                                <option value='Punjab'>Punjab</option>
                                <option value='Rajasthan'>Rajasthan</option>
                                <option value='Sikkim'>Sikkim</option>
                                <option value='Tamil Nadu'>Tamil Nadu</option>
                                <option value='Telengana'>Telengana</option>
                                <option value='Tripura'>Tripura</option>
                                <option value='Uttar Pradesh'>
                                  Uttar Pradesh
                                </option>
                                <option value='Uttarakhand'>Uttarakhand</option>
                                <option value='West Bengal'>West Bengal</option>
                              </select>
                            </div>

                            <div class='item rt-filter-btn'>
                              <div
                                class='dropdown-filter item'
                                onClick={() => setIsClick(!isclick)}
                              >
                                <span>
                                  <i class='fas fa-sliders-h'></i>
                                </span>
                              </div>
                              <div
                                class='filter-button-area'
                                style={{ height: '100%', display: 'flex' }}
                              >
                                <Link
                                  class='filter-btn'
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                  to='/'
                                >
                                  <span>Search</span>
                                  <i class='fas fa-search'></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div
                            class={`explore__form-checkbox-list full-filter ${
                              isclick && 'filter-block '
                            }`}
                          >
                            <div class='row'>
                              <div class='col-lg-4 col-md-6 py-1 pr-30 pl-0'>
                                <div class='form-group bed'>
                                  <label class='item-bedrooms'>
                                    Number of Visitors
                                  </label>
                                  <select
                                    class='form-select'
                                    aria-label='addcategory'
                                    // onChange={(e) => {
                                    // 	setpropDetails((prev) => {
                                    // 		return {
                                    // 			...prev,
                                    // 			category: e.target.value,
                                    // 		};
                                    // 	});
                                    // }}
                                  >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                  </select>
                                </div>
                              </div>
                              {/* <div class="form-group">
																<label
																	htmlFor="addcategory"
																	class="control-label"
																>
																	Category
																	<strong class="rtcl-required">*</strong>
																</label>
																<select
																	class="form-select"
																	aria-label="addcategory"
																	
																>
																	<option value="Rent">Rent</option>
																	<option value="Buy">Buy</option>
																</select>
															</div> */}
                              {/* <div class='col-lg-4 col-md-6 py-1 pr-30 pl-0'>
                                <div class='form-group bath'>
                                  <label class='item-bath'>Bathrooms</label>
                                  <select
                                    class='form-select'
                                    aria-label='addcategory'
                                    // onChange={(e) => {
                                    // 	setpropDetails((prev) => {
                                    // 		return {
                                    // 			...prev,
                                    // 			category: e.target.value,
                                    // 		};
                                    // 	});
                                    // }}
                                  >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                  </select>
                                </div>
                              </div> */}
                              {/* <div class='col-lg-4 col-md-6 py-1 pl-0 pr-0'>
                                <div class='form-group garage'>
                                  <label class='item-garage'>Rooms</label>
                                  <select
                                    class='form-select'
                                    aria-label='addcategory'
                                    // onChange={(e) => {
                                    // 	setpropDetails((prev) => {
                                    // 		return {
                                    // 			...prev,
                                    // 			category: e.target.value,
                                    // 		};
                                    // 	});
                                    // }}
                                  >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                  </select>
                                </div>
                              </div> */}
                              {/* <div class='main-search-field-2 col-12'>
                                <div class='row'>
                                  <div class='col-md-6 pl-0'>
                                    <div class='price-range-wrapper'>
                                      <div class='range-box'>
                                        <div
                                          class='price-label'
                                          style={{ width: '200px' }}
                                        >
                                          Size:
                                        </div>
                                        <div
                                          id='price-range-filter-3'
                                          class='price-range-filter'
                                        ></div>
                                        <div class='price-filter-wrap d-flex align-items-center'>
                                          <div class='price-range-select'>
                                            <div
                                              class='price-range'
                                              id='price-range-min-3'
                                            ></div>
                                            <div class='price-range'>-</div>
                                            <div
                                              class='price-range'
                                              id='price-range-max-3'
                                            ></div>
                                            <div class='price-range range-title'>
                                              sft
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class='col-md-6 pl-0'>
                                    <div class='price-range-wrapper'>
                                      <div class='range-box'>
                                        <div class='price-label'>Distance:</div>
                                        <div
                                          id='price-range-filter-2'
                                          class='price-range-filter'
                                        ></div>
                                        <div class='price-filter-wrap d-flex align-items-center'>
                                          <div class='price-range-select'>
                                            <div
                                              class='price-range'
                                              id='price-range-min-2'
                                            ></div>
                                            <div class='price-range'>-</div>
                                            <div
                                              class='price-range'
                                              id='price-range-max-2'
                                            ></div>
                                            <div class='price-range range-title'>
                                              km
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                              <div class='row' style={{ marginLeft: '0' }}>
                                <div
                                  class='col-lg-12 col-md-12 col-sm-12'
                                  style={{ padding: 0 }}
                                >
                                  <h4 class='text-dark'>Amenities</h4>
                                  <ul class='no-ul-list third-row'>
                                    <li>
                                      <input
                                        id='a-1'
                                        class='checkbox-custom'
                                        name='a-1'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-1'
                                        class='checkbox-custom-label'
                                      >
                                        Timings
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id='a-2'
                                        class='checkbox-custom'
                                        name='a-2'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-2'
                                        class='checkbox-custom-label'
                                      >
                                        Aarti Time
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id='a-3'
                                        class='checkbox-custom'
                                        name='a-3'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-3'
                                        class='checkbox-custom-label'
                                      >
                                        Tour Time
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id='a-4'
                                        class='checkbox-custom'
                                        name='a-4'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-4'
                                        class='checkbox-custom-label'
                                      >
                                        Land Area
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id='a-5'
                                        class='checkbox-custom'
                                        name='a-5'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-5'
                                        class='checkbox-custom-label'
                                      >
                                        Year Build
                                      </label>
                                    </li>
                                    {/* <li>
                                      <input
                                        id='a-6'
                                        class='checkbox-custom'
                                        name='a-6'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-6'
                                        class='checkbox-custom-label'
                                      >
                                        Lawn
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id='a-7'
                                        class='checkbox-custom'
                                        name='a-7'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-7'
                                        class='checkbox-custom-label'
                                      >
                                        Laundry
                                      </label>
                                    </li> */}
                                    <li>
                                      <input
                                        id='a-8'
                                        class='checkbox-custom'
                                        name='a-8'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-8'
                                        class='checkbox-custom-label'
                                      >
                                        Parking
                                      </label>
                                    </li>
                                    {/* <li>
                                      <input
                                        id='a-9'
                                        class='checkbox-custom'
                                        name='a-9'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-9'
                                        class='checkbox-custom-label'
                                      >
                                        Cc Cam
                                      </label>
                                    </li> */}
                                  </ul>
                                </div>
                              </div>
                              <div
                                class='filter-button'
                                style={{ justifyContent: 'center' }}
                              >
                                <Link to='/' class='filter-btn1'>
                                  Apply Filter
                                </Link>
                                <Link to='/' class='filter-btn1 reset-btn'>
                                  Reset Filter<i class='fas fa-redo-alt'></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class='item-para wow fadeInUp' data-wow-delay='.4s'>
                    Put your
                    <span class='banner-p'> heart, mind, and soul</span> into
                    even your
                    <br></br>
                    smallest acts.
                    {/* <span class='banner-p'> </span> */}
                    <span class='item-shape'>
                      <img
                        class='colour'
                        src='img/figure/shape39.svg'
                        width='79'
                        height='16'
                        alt='shape'
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='property-wrap1 property-wrap-10'>
        <div class='container'>
          <div class='item-heading-center'>
            <span class='section-subtitle'>MOST VISITED</span>
            <h2 class='section-title'>Religious Places</h2>
            <div class='bg-title-wrap' style={{ display: 'block' }}>
              <span class='background-title solid'>Pilgrimages</span>
            </div>
          </div>
          <div class='row'>
            <div class='col-xl-4 col-lg-6 col-md-6'>
              <div
                class='property-box2 wow animated fadeInUp'
                data-wow-delay='.3s'
              >
                <div class='item-img'>
                  <Link to='/properties?category=buy'>
                    <img
                      src='img/blog/blog4.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div class='item-category-box1'>
                    <div class='item-category'>Visit Now</div>
                  </div>
                  <div class='rent-price'>
                    <div class='item-price'>
                      ₹250
                      <span>
                        <i>/</i>person
                      </span>
                    </div>
                  </div>
                  <div class='react-icon'>
                    <ul>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Favourites'
                        >
                          <i class='flaticon-heart'></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Compare'
                        >
                          <i class='flaticon-left-and-right-arrows'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class='item-category10'>
                  <Link to='SingleProperty'>Temple</Link>
                </div>
                <div class='item-content'>
                  <div class='verified-area'>
                    <h3 class='item-title'>
                      <Link to='/properties?category=buy'>
                        Akshardham Temple
                      </Link>
                    </h3>
                  </div>
                  <div class='location-area'>
                    <i class='flaticon-maps-and-flags'></i>New Delhi, India
                  </div>
                </div>
              </div>
            </div>
            <div class='col-xl-4 col-lg-6 col-md-6'>
              <div
                class='property-box2 wow animated fadeInUp'
                data-wow-delay='.2s'
              >
                <div class='item-img'>
                  <Link to='/properties?category=buy'>
                    <img
                      src='img/blog/blog5.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div class='item-category-box1'>
                    <div class='item-category'>Visit Now</div>
                  </div>
                  <div class='rent-price'>
                    <div class='item-price'>Free</div>
                  </div>
                  <div class='react-icon'>
                    <ul>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Favourites'
                        >
                          <i class='flaticon-heart'></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Compare'
                        >
                          <i class='flaticon-left-and-right-arrows'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class='item-category10'>
                  <Link to='/properties?category=buy'>Temple</Link>
                </div>
                <div class='item-content'>
                  <div class='verified-area'>
                    <h3 class='item-title'>
                      <Link to='/properties?category=buy'>Lotus Temple</Link>
                    </h3>
                  </div>
                  <div class='location-area'>
                    <i class='flaticon-maps-and-flags'></i>New Delhi, India
                  </div>
                </div>
              </div>
            </div>
            <div class='col-xl-4 col-lg-6 col-md-6'>
              <div
                class='property-box2 wow animated fadeInUp'
                data-wow-delay='.1s'
              >
                <div class='item-img'>
                  <Link to='/properties?category=buy'>
                    <img
                      src='img/blog/blog6.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div class='item-category-box1'>
                    <div class='item-category'>Visit Now</div>
                  </div>
                  <div class='rent-price'>
                    <div class='item-price'>Free</div>
                  </div>
                  <div class='react-icon'>
                    <ul>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Favourites'
                        >
                          <i class='flaticon-heart'></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Compare'
                        >
                          <i class='flaticon-left-and-right-arrows'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class='item-category10'>
                  <Link to='/properties?category=buy'>Mandir</Link>
                </div>
                <div class='item-content'>
                  <div class='verified-area'>
                    <h3 class='item-title'>
                      <Link to='/properties?category=buy'>Hanuman Mandir</Link>
                    </h3>
                  </div>
                  <div class='location-area'>
                    <i class='flaticon-maps-and-flags'></i>New Delhi, India
                  </div>
                </div>
              </div>
            </div>
            <div class='col-xl-4 col-lg-6 col-md-6'>
              <div
                class='property-box2 wow animated fadeInUp'
                data-wow-delay='.3s'
              >
                <div class='item-img'>
                  <Link to='/properties?category=buy'>
                    <img
                      src='img/blog/blog7.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div class='item-category-box1'>
                    <div class='item-category'>Visit Now</div>
                  </div>
                  <div class='rent-price'>
                    <div class='item-price'>Free</div>
                  </div>
                  <div class='react-icon'>
                    <ul>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Favourites'
                        >
                          <i class='flaticon-heart'></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Compare'
                        >
                          <i class='flaticon-left-and-right-arrows'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class='item-category10'>
                  <Link to='/properties?category=buy'>Gurudwara</Link>
                </div>
                <div class='item-content'>
                  <div class='verified-area'>
                    <h3 class='item-title'>
                      <Link to='/properties?category=buy'>Golden Temple</Link>
                    </h3>
                  </div>
                  <div class='location-area'>
                    <i class='flaticon-maps-and-flags'></i>Amritsar, India
                  </div>
                </div>
              </div>
            </div>
            <div class='col-xl-4 col-lg-6 col-md-6'>
              <div
                class='property-box2 wow animated fadeInUp'
                data-wow-delay='.6s'
              >
                <div class='item-img'>
                  <Link to='/properties?category=buy'>
                    <img
                      src='img/blog/blog8.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div class='item-category-box1'>
                    <div class='item-category'>Visit Now</div>
                  </div>
                  <div class='rent-price'>
                    <div class='item-price'>Free</div>
                  </div>
                  <div class='react-icon'>
                    <ul>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Favourites'
                        >
                          <i class='flaticon-heart'></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Compare'
                        >
                          <i class='flaticon-left-and-right-arrows'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class='item-category10'>
                  <Link to='/properties?category=buy'>Church</Link>
                </div>
                <div class='item-content'>
                  <div class='verified-area'>
                    <h3 class='item-title'>
                      <Link to='/properties?category=buy'>
                        Shimla Christ Church
                      </Link>
                    </h3>
                  </div>
                  <div class='location-area'>
                    <i class='flaticon-maps-and-flags'></i>Himachal Pradesh,
                    India
                  </div>
                </div>
              </div>
            </div>
            <div class='col-xl-4 col-lg-6 col-md-6'>
              <div
                class='property-box2 wow animated fadeInUp'
                data-wow-delay='.2s'
              >
                <div class='item-img'>
                  <Link to='/properties?category=buy'>
                    <img
                      src='img/blog/blog9.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div class='item-category-box1'>
                    <div class='item-category'>Visit Now</div>
                  </div>
                  <div class='rent-price'>
                    <div class='item-price'>Free</div>
                  </div>
                  <div class='react-icon'>
                    <ul>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Favourites'
                        >
                          <i class='flaticon-heart'></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Compare'
                        >
                          <i class='flaticon-left-and-right-arrows'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class='item-category10'>
                  <Link to='/properties?category=buy'>Mandir</Link>
                </div>
                <div class='item-content'>
                  <div class='verified-area'>
                    <h3 class='item-title'>
                      <Link to='/properties?category=buy'>
                        Kapaleeshwarar Temple
                      </Link>
                    </h3>
                  </div>
                  <div class='location-area'>
                    <i class='flaticon-maps-and-flags'></i>Chennai, India
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='property-button'>
            <Link to='/' class='item-btn'>
              View All Locations
            </Link>
          </div>
        </div>
      </section>
      <section class='about-wrap-5 counter-appear motion-effects-wrap'>
        <div class='container'>
          <div class='item-element-shape'>
            <ul>
              <li>
                <img
                  class='wow animated fadeInRight'
                  data-wow-delay='.4s'
                  src='img/figure/shape30.svg'
                  width='312'
                  height='295'
                  alt='shape'
                />
              </li>
              <li>
                <img
                  class='motion-effects12'
                  src='img/figure/shape31.svg'
                  width='155'
                  height='92'
                  alt='shape'
                />
              </li>
              <li>
                <img
                  src='img/figure/shape32.svg'
                  width='575'
                  height='162'
                  alt='shape'
                />
              </li>
            </ul>
          </div>
          <div class='row'>
            <div class='col-lg-6 col-md-12'>
              <div
                class='about-box-9 wow animated fadeInLeft'
                data-wow-delay='.5s'
              >
                <div class='item-img'>
                  <img
                    src='img/blog/about2.png'
                    alt='shape'
                    width='567'
                    height='572'
                  />
                </div>
              </div>
            </div>
            <div class='col-lg-6 col-md-12'>
              <div
                class='about-box-10 wow animated fadeInRight'
                data-wow-delay='.3s'
              >
                <div class='item-heading-left mb-bottom'>
                  <span class='section-subtitle'>WHO WE ARE</span>
                  <h2 class='section-title'>
                    We are Offering The Best immersive experience for all
                    Pilgrimages
                  </h2>
                  <div class='bg-title-wrap' style={{ display: 'block' }}>
                    <span class='background-title solid'>About</span>
                  </div>
                  <p>
                    Experience places in a smarter way with Virtual reality.
                    Explore future at your home with all details and a seamless
                    experience.
                  </p>
                </div>
                <div class='row'>
                  <div class='col-lg-6 col-md-6'>
                    <div class='about-svg-shape'>
                      <img
                        class='colour-1'
                        src='img/figure/shape28.svg'
                        alt='svg'
                      />
                      <div class='item-content'>
                        <div class='item-content'>
                          <div class='item-content__text'>
                            <div class='item-k'>
                              <span class='counterUp' data-counter='55'>
                                55
                              </span>
                              K
                            </div>
                          </div>
                          <p>Satisfied People</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6 col-md-6'>
                    <div class='about-svg-shape'>
                      <img
                        class='colour-1'
                        src='img/figure/shape29.svg'
                        alt='svg'
                      />
                      <div class='item-content'>
                        <div class='item-content__text'>
                          <div class='item-k'>
                            <span class='counterUp' data-counter='11'>
                              11
                            </span>
                            K
                          </div>
                        </div>
                        <p>Verified Property</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  The promise to use best-in-class technology to reduce the time
                  and friction of visiting different places around the country.
                </p>
                <div class='banner-button about-button-2'>
                  <Link to='/contactus' class='banner-btn'>
                    Contact With Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='location-wrap1'>
        <div class='container'>
          <div class='item-heading-center'>
            <span class='section-subtitle'>Top Areas</span>
            <h2 class='section-title'>Find Temples in Your Neighborhood</h2>
            <div class='bg-title-wrap' style={{ display: 'block' }}>
              <span class='background-title solid'>Locations</span>
            </div>
          </div>
          <div class='row justify-content-center'>
            <div class='col-lg-4 col-md-6'>
              <div
                class='location-box3 location-box4 wow zoomIn'
                data-wow-delay='.3s'
              >
                <div class='item-img'>
                  <Link to='/properties?category=buy'>
                    <img
                      src='img/blog/location-1.jpg'
                      alt='location'
                      width='424'
                      height='280'
                    />
                  </Link>
                </div>
                <div class='item-content'>
                  <div class='content-body'>
                    <div class='item-title'>
                      <h3>
                        <Link to='/properties?category=buy'>Delhi</Link>
                      </h3>
                    </div>
                    <div class='item-category'>
                      <span>3 Locations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-4 col-md-6'>
              <div
                class='location-box3 location-box4 wow zoomIn'
                data-wow-delay='.4s'
              >
                <div class='item-img'>
                  <Link to='/properties?category=buy'>
                    <img
                      src='img/blog/location-2.jpg'
                      alt='location'
                      width='424'
                      height='280'
                    />
                  </Link>
                </div>
                <div class='item-content'>
                  <div class='content-body'>
                    <div class='item-title'>
                      <h3>
                        <Link to='/properties?category=buy'>Mumbai</Link>
                      </h3>
                    </div>
                    <div class='item-category'>
                      <span>6 Locations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-4 col-md-6'>
              <div
                class='location-box3 location-box4 wow zoomIn'
                data-wow-delay='.5s'
              >
                <div class='item-img'>
                  <Link to='/properties?category=buy'>
                    <img
                      src='img/blog/location-3.jpg'
                      alt='location'
                      width='424'
                      height='280'
                    />
                  </Link>
                </div>
                <div class='item-content'>
                  <div class='content-body'>
                    <div class='item-title'>
                      <h3>
                        <Link to='/properties?category=buy'>Bangalore</Link>
                      </h3>
                    </div>
                    <div class='item-category'>
                      <span>5 Locations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='row'>
            <div class='col-lg-4 col-md-4'>
              <div
                class='location-box3 location-box4 wow zoomIn'
                data-wow-delay='.6s'
              >
                <div class='item-img'>
                  <Link to='/properties?category=buy'>
                    <img
                      src='img/blog/location-4.jpg'
                      alt='location'
                      width='424'
                      height='280'
                    />
                  </Link>
                </div>
                <div class='item-content'>
                  <div class='content-body'>
                    <div class='item-title'>
                      <h3>
                        <Link to='/properties?category=buy'>Punjab</Link>
                      </h3>
                    </div>
                    <div class='item-category'>
                      <span>8 Locations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-8 col-md-8'>
              <div
                class='location-box3 location-box4 wow zoomIn'
                data-wow-delay='.7s'
              >
                <div class='item-img'>
                  <Link to='/properties?category=buy'>
                    <img
                      src='img/blog/location-5.jpg'
                      alt='location'
                      width='846'
                      height='280'
                    />
                  </Link>
                </div>
                <div class='item-content'>
                  <div class='content-body'>
                    <div class='item-title'>
                      <h3>
                        <Link to='/properties?category=buy'>Kolkata</Link>
                      </h3>
                    </div>
                    <div class='item-category'>
                      <span>2 Locations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section
        class='property-banner-wrap1 parallaxie'
        data-bg-image='img/banner/banner3.jpg'
      >
        <div class='container'>
          <div class='row align-items-center'>
            <div class='col-lg-5 col-md-12'>
              <div class='property-box1 wow slideInUp' data-wow-delay='100'>
                <div class='item-subtitle'>Let’s Take a Tour</div>
                <h3 class='item-title'>
                  Search places Smarter, Quicker & Anywhere
                </h3>
                <div class='play-button'>
                  <div class='item-icon'>
                    <span class='play-icon style-1'>
                      <i class='fas fa-play'></i>
                    </span>
                    <span class='play-text'>Get Started</span>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-7 col-md-12'>
              <div class='property-img wow fadeInUp' data-wow-delay='100'>
                <div class='bg-title-wrap' style={{ display: 'block' }}>
                  <span class='background-title solid'>Virtual Reality For All</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*  */}
      <section class='banner-collection4 motion-effects-wrap'>
        <div class='item-element'>
          <ul>
            <li>
              <img
                class='wow fadeInLeft'
                data-wow-delay='.4s'
                src='img/figure/shape19.svg'
                width='388'
                height='417'
                alt='shape'
              />
            </li>
            <li>
              <img
                class='motion-effects12'
                src='img/figure/shape20.svg'
                width='191'
                height='178'
                alt='shape'
              />
            </li>
            <li>
              <img
                src='img/figure/shape21.svg'
                width='570'
                height='243'
                alt='shape'
              />
            </li>
          </ul>
        </div>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-3'>
              <div class='banner-box-2 wow fadeInLeft' data-wow-delay='.5s'>
                <div class='item-img'>
                  <img
                    src='img/banner/banner5.png'
                    width='309'
                    height='523'
                    alt='banner'
                  />
                </div>
              </div>
            </div>
            <div class='col-lg-5'>
              <div class='banner-content-2 wow fadeInUp' data-wow-delay='.7s'>
                <div class='item-heading-left'>
                  <h2 class='section-title'>
                    We’re Providing the Best Virtual Reality Experience
                  </h2>
                  <p class='item-para'>
                    Explore places in VR. A smart way to visti any place and
                    experience using virtual reality
                  </p>
                  <p></p>
                </div>
                <div class='row'>
                  <div class='col-lg-6 col-md-6'>
                    <div class='service-box-1'>
                      <div class='service-icon'>
                        <i class='fas fa-phone-alt'></i>
                      </div>
                      <div class='service-content'>
                        <h3 class='info-title'>Our Hot Line:</h3>
                        <p>+91 8826024495</p>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6 col-md-6'>
                    <div class='service-box-1 service-box-2'>
                      <div class='service-icon'>
                        <i class='fas fa-phone-alt'></i>
                      </div>
                      <div class='service-content'>
                        <h3 class='info-title'>Mail Us:</h3>
                        <p>info@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='banner-button'>
                  <Link to='Contactus' class='banner-btn'>
                    Connect With Us
                  </Link>
                </div>
              </div>
            </div>
            <div class='col-lg-4'>
              <div
                class='banner-img-style-2 wow fadeInRight'
                data-wow-delay='.6s'
              >
                <img
                  src='img/banner/banner4.png'
                  width='569'
                  height='480'
                  alt='banner'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="testimonial-wrap3">
				<div class="container">
					<div class="testimonial-layout3 swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<div class="item-img">
									<img
										src="img/slider/slider1.png"
										width="74"
										height="74"
										alt="slider"
									/>
								</div>
								<div class="testimonial-content">
									<h3 class="item-title">Maria Zokatti</h3>
									<div class="item-subtitle">SEO Marketing</div>
									<div class="rtin-content">
										<span>
											“ when an unknown printer took a galley of type and
											scrambled it to make a type specimen bookhas survived not
											only five centuries, but also the leap into electronic
											type setting emaining essentially unchanged follower.”
										</span>
										<div class="item-icon">
											<i class="fas fa-quote-left"></i>
										</div>
									</div>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="item-img">
									<img
										src="img/slider/slider2.png"
										width="74"
										height="74"
										alt="slider"
									/>
								</div>
								<div class="testimonial-content">
									<h3 class="item-title">Maria Zokatti</h3>
									<div class="item-subtitle">SEO Marketing</div>
									<div class="rtin-content">
										<span>
											“ when an unknown printer took a galley of type and
											scrambled it to make a type specimen bookhas survived not
											only five centuries, but also the leap into electronic
											type setting emaining essentially unchanged follower.”
										</span>
										<div class="item-icon">
											<i class="fas fa-quote-left"></i>
										</div>
									</div>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="item-img">
									<img
										src="img/slider/slider3.png"
										width="74"
										height="74"
										alt="slider"
									/>
								</div>
								<div class="testimonial-content">
									<h3 class="item-title">Maria Zokatti</h3>
									<div class="item-subtitle">SEO Marketing</div>
									<div class="rtin-content">
										<span>
											“ when an unknown printer took a galley of type and
											scrambled it to make a type specimen bookhas survived not
											only five centuries, but also the leap into electronic
											type setting emaining essentially unchanged follower.”
										</span>
										<div class="item-icon">
											<i class="fas fa-quote-left"></i>
										</div>
									</div>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="item-img">
									<img
										src="img/slider/slider1.png"
										width="74"
										height="74"
										alt="slider"
									/>
								</div>
								<div class="testimonial-content">
									<h3 class="item-title">Maria Zokatti</h3>
									<div class="item-subtitle">SEO Marketing</div>
									<div class="rtin-content">
										<span>
											“ when an unknown printer took a galley of type and
											scrambled it to make a type specimen bookhas survived not
											only five centuries, but also the leap into electronic
											type setting emaining essentially unchanged follower.”
										</span>
										<div class="item-icon">
											<i class="fas fa-quote-left"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div class="swiper-button-prev testimonial-btn"></div>
						<div class="swiper-button-next testimonial-btn"></div> */}
      {/* </div>
				</div>
			</section>  */}
      <section class='banner-collection3'>
        <div class='container'>
          <div class='item-heading-center'>
            {/* <h2 class='section-title'>Find Your Desire Dream Home Today!</h2> */}
            <div
              class='bg-title-wrap'
              style={{ display: 'block', position: 'relative', marginTop: 50 }}
            >
              <span class='background-title solid'>
                Cleanse Your Soul Today!
              </span>
            </div>
            <div class='banner-button'>
              <Link to='Contactus' class='banner-btn'>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>{' '}
      <ScrollButton scrollState={scrollState} />
      <div>
        <Chatbotbtn />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
