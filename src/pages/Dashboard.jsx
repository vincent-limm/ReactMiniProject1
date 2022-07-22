import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import logo from '../data/logo.webp';
import cover from '../data/coverimg.jpg';
import {
  Avatar,
  Button,
  Card,
  Col,
  Grid,
  Image,
  Row,
  Space,
  Switch,
} from 'antd';
import { AiFillDelete, AiOutlineShareAlt } from 'react-icons/ai';
import { BsBuilding } from 'react-icons/bs';
import { MdBuild } from 'react-icons/md';
import { BiBuildings } from 'react-icons/bi';
import { FiEdit2 } from 'react-icons/fi';
import { RiVisaLine } from 'react-icons/ri';

const Dashboard = () => {
  return (
    <>
      <Row>
        <Col span={8}>
          <Card
            style={{
              width: '100%',
            }}
            cover={
              <div className='flex justify-items-center items-center w-full'>
                <img src={cover}></img>
                <Avatar
                  className='absolute self-center border-2 left-56'
                  size={{
                    xs: 24,
                    sm: 32,
                    md: 40,
                    lg: 64,
                    xl: 80,
                    xxl: 100,
                  }}
                  src={
                    <Image
                      src={logo}
                      style={{
                        width: '100%',
                      }}
                    />
                  }
                  icon={logo}
                />
              </div>
            }
          >
            <p className='text-bold flex left-56'>Mitramas Infosys Global</p>
            <p className='text-gray-400 mb-10'>Layanan IT</p>

            <p className='text-gray-400'>Status Perusahaan</p>
            <div className='relative mb-10'>
              <p className='text-green-900 text-bold absolute left-0'>Aktif</p>
              <p className='absolute right-0'>
                <Switch defaultChecked />
              </p>
            </div>

            <p className='text-gray-400'>Singkatan</p>
            <p>MIG</p>

            <p className='text-gray-400'>Alamat Perusahaan</p>
            <p>Jl. Tebet Raya No.42, Jakarta Selatan</p>

            <p className='text-gray-400'>Penanggung Jawab (PIC)</p>
            <p>John Doe</p>

            <p className='text-gray-400'>Tanggal PKP</p>
            <p>03 Maret 2021</p>

            <p className='text-gray-400'>E-mail</p>
            <p className='decoration-solid text-green-900'>
              mig@mitrasolusi.group
            </p>

            <p className='text-gray-400'>No. Telp</p>
            <p className='decoration-solid text-green-900'>021-5678-1234</p>

            <p className='text-gray-400'>Situs Web</p>
            <p className='decoration-solid text-green-900'>mitramas.com</p>
          </Card>
        </Col>
        <Col span={16}>
          <Row>
            <Col span={24}>
              <Card
                title='Lokasi'
                extra={<a href='#'>Lihat Semua</a>}
                style={{
                  width: '100%',
                }}
              >
                <Row>
                  <Col span={8} className=''>
                    <div className='box bg-lime-500'>
                      <Row>
                        <Col span={20}>
                          <BsBuilding size={70} />
                        </Col>
                        <Col span={4}>
                          <Row>20</Row>
                          <Row className='text-sm'>Induk</Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className='box bg-lime-500'>
                      <Row>
                        <Col span={17}>
                          <MdBuild size={70} />
                        </Col>
                        <Col span={7}>
                          <Row>3</Row>
                          <Row className='text-sm'>Sub Lokasi Level 1</Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className='box bg-lime-500'>
                      <Row>
                        <Col span={18}>
                          <BiBuildings size={70} />
                        </Col>
                        <Col span={6}>
                          <Row>1</Row>
                          <Row className='text-sm'>Sub Lokasi Level 2</Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Row>
                <Card
                  title='Akun Bank'
                  extra={<Button>+ Tambah Akun Bank</Button>}
                  style={{
                    width: '100%',
                  }}
                >
                  <Row>
                    <Col span={10}>
                      <RiVisaLine size={70} />
                    </Col>
                    <Col span={14}>
                      <Row className='mb-10'>
                        <p className='absolute left-0 text-bold'>
                          Bank Bukopin
                        </p>
                        <p className='absolute right-0'>
                          <FiEdit2 /> <AiFillDelete />
                        </p>
                      </Row>
                      <Row>**** 0876 - Yusron Taufiq</Row>
                      <Row>IDR</Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={10}>
                      <RiVisaLine size={70} />
                    </Col>
                    <Col span={14}>
                      <Row className='mb-10'>
                        <p className='absolute left-0 text-bold'>Citibank NA</p>
                        <p className='absolute right-0'>
                          <FiEdit2 /> <AiFillDelete />
                        </p>
                      </Row>
                      <Row>**** 5525 - Si Tampan</Row>
                      <Row>USD</Row>
                    </Col>
                  </Row>
                </Card>
              </Row>
              <Row>
                <Card
                  title='Relasi'
                  extra={<a href='#'>Lihat Semua</a>}
                  style={{
                    width: '100%',
                  }}
                >
                  <Row className='mb-5'>
                    <Col span={2}>
                      <AiOutlineShareAlt />
                    </Col>
                    <Col span={22}>
                      <Row>
                        <Col span={24}>20</Col>
                        <Col span={24}>Memiliki</Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className='mb-5'>
                    <Col span={2}>
                      <AiOutlineShareAlt />
                    </Col>
                    <Col span={22}>
                      <Row>
                        <Col span={24}>108</Col>
                        <Col span={24}>Menggunakan</Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className='mb-5'>
                    <Col span={2}>
                      <AiOutlineShareAlt />
                    </Col>
                    <Col span={22}>
                      <Row>
                        <Col span={24}>67</Col>
                        <Col span={24}>Meminjam</Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Row>
            </Col>
            <Col span={12}>
              <Card
                title='Aktivitas'
                style={{
                  width: '100%',
                }}
              >
                <p className='text-bold'>
                  Yusron baru saja menambahkan lokasi baru Kantor Cabang
                  Jagakarsa
                </p>
                <p className='text-gray-400 mb-5'>Hari ini, 06:00</p>
                <p className='text-bold'>
                  Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk
                  Kantor Cabang Tebet
                </p>
                <p className='text-gray-400 mb-5'>Kemarin, 17:32</p>
                <p className='text-bold'>
                  Yusron melakukan perubahan profil pada induk Kantor Cabang
                  Bekasi
                </p>
                <p className='text-gray-400 mb-5'>Kemarin, 17:32</p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
