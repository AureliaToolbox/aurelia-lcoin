import {AddressService} from 'services/address';

export class Address {
  searchText = '';
  addressInfo;

  static inject = [AddressService];
  constructor(addressService) {
    this.addressService = addressService;
  }

  search() {
    return this.addressService.getAddressInfo(this.searchText).then(result => {
      this.addressInfos = result;
    });
  }
}
