import { Row, Col, Select } from "antd";
import React, { useEffect, useState } from "react";
import { isEmpty, isNil } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  requestMakerListPending,
  requestModelListPending,
  requestYearListPending,
} from "./states/action";
import {
  defaultMakerData,
  defaultModelData,
  defaultYearData,
  yearList,
} from "./states/constant";
import {
  selectMakerListData,
  selectMakerListLoading,
  selectModelListData,
  selectModelListLoading,
} from "./states/selector";
import { MakerEntity, ModelEntity, YearEntity } from "./states/type";
import { MakerRequest, ModelRequest } from "../APIService/request";

const Content: React.FC = () => {
  const dispatch = useDispatch();
  const makerList = useSelector(selectMakerListData);
  const makerLoading = useSelector(selectMakerListLoading);
  const modelList = useSelector(selectModelListData);
  const modelLoading = useSelector(selectModelListLoading);

  const [selectedYear, setSelectedYear] = useState<string | null | undefined>(
    null
  );
  const [selectedYearItem, setSelectedYearItem] = useState<YearEntity | null>(
    defaultYearData ?? null
  );
  const [selectedMakerId, setSelectedMakerId] = useState<
    number | null | undefined
  >(null);
  const [selectedMakerItem, setSelectedMakerItem] =
    useState<MakerEntity | null>(defaultMakerData ?? null);
  const [selectedModelId, setSelectedModelId] = useState<
    number | null | undefined
  >(null);
  const [selectedModelItem, setSelectedModelItem] =
    useState<ModelEntity | null>(defaultModelData ?? null);

  useEffect(() => {
    dispatch<any>(requestYearListPending());
  }, []);

  useEffect(() => {
    if (!isNil(selectedYear) && !isEmpty(selectedYear)) {
      const payload: MakerRequest = {
        year: selectedYear,
      };
      dispatch<any>(requestMakerListPending(payload));
    }
  }, [selectedYear]);

  useEffect(() => {
    if (
      !isNil(selectedYear) &&
      !isEmpty(selectedYear) &&
      !isNil(selectedMakerId) &&
      selectedMakerId !== 0
    ) {
      const payload: ModelRequest = {
        id: selectedMakerId,
        year: selectedYear,
      };
      dispatch<any>(requestModelListPending(payload));
    }
  }, [selectedYear, selectedMakerId]);

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
    if (!isNil(value)) {
      setSelectedYearItem(
        yearList.filter((item: YearEntity) => item.year === value)[0]
      );
    }

    setSelectedMakerId(null);
    setSelectedMakerItem(null);

    setSelectedModelId(null);
    setSelectedModelItem(null);
  };

  const handleMakerChange = (value: number) => {
    setSelectedMakerId(value);
    if (!isNil(value)) {
      setSelectedMakerItem(
        makerList.Results.filter(
          (item: MakerEntity) => item?.MakeId === value
        )[0] ?? null
      );
    }
    setSelectedModelId(null);
    setSelectedModelItem(null);
  };

  const handleModelChange = (value: number) => {
    setSelectedModelId(value);
    if (!isNil(value)) {
      setSelectedModelItem(
        modelList.Results.filter(
          (item: ModelEntity) => item.Model_ID === value
        )[0] ?? null
      );
    }
  };

  return (
    <div className="main-body">
      <div className="container">
        <div className="select-container">
          <Row>
            <Col span={4}>
              <div className="select-block">
                <h4>SET YOUR VEHICLE</h4>
                <div>Get an exact fit for your vehicle</div>
              </div>
            </Col>
            <Col span={5}>
              <div className="select-block">
                <Select
                  listItemHeight={10}
                  listHeight={250}
                  placeholder="1 | Year"
                  style={{ width: "100%" }}
                  options={yearList.map((data: YearEntity, index: number) => ({
                    value: data.year,
                    label: data.year,
                  }))}
                  onChange={handleYearChange}
                  value={selectedYear}
                  disabled={yearList.length === 0}
                />
              </div>
            </Col>
            <Col span={5}>
              <div className="select-block">
                <Select
                  listItemHeight={10}
                  listHeight={250}
                  placeholder="2 | Maker"
                  style={{ width: "100%" }}
                  options={
                    makerList &&
                    makerList.Results &&
                    makerList.Results.map(
                      (data: MakerEntity, index: number) => ({
                        value: data.MakeId,
                        label: data.MakeName,
                      })
                    )
                  }
                  onChange={handleMakerChange}
                  value={selectedMakerId}
                  disabled={
                    (makerList &&
                      makerList.Results &&
                      makerList.Results.length === 0) ||
                    isNil(selectedYearItem)
                  }
                  loading={makerLoading}
                />
              </div>
            </Col>
            <Col span={5}>
              <div className="select-block">
                <Select
                  listItemHeight={10}
                  listHeight={250}
                  placeholder="3 | Model"
                  style={{ width: "100%" }}
                  options={
                    modelList &&
                    modelList.Results &&
                    modelList.Results.map(
                      (data: ModelEntity, index: number) => ({
                        value: data.Model_ID,
                        label: data.Model_Name,
                      })
                    )
                  }
                  onChange={handleModelChange}
                  value={selectedModelId}
                  disabled={
                    (modelList &&
                      modelList.Results &&
                      modelList.Results.length === 0) ||
                    isNil(selectedMakerItem)
                  }
                  loading={modelLoading}
                />
              </div>
            </Col>
            <Col span={5}>
            <div className="select-block">
                <Select
                  listItemHeight={10}
                  listHeight={250}
                  placeholder="4 | Engine"
                  style={{ width: "100%" }}
                  options={
                    modelList &&
                    modelList.Results &&
                    modelList.Results.map(
                      (data: ModelEntity, index: number) => ({
                        value: data.Model_ID,
                        label: data.Model_Name,
                      })
                    )
                  }
                  onChange={handleModelChange}
                  value={selectedModelId}
                  disabled={
                    (modelList &&
                      modelList.Results &&
                      modelList.Results.length === 0) ||
                    isNil(selectedMakerItem)
                  }
                  loading={modelLoading}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Content;
